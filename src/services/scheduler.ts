import cron from 'node-cron';
import { auctionScraper } from './auctionScraper';

class AuctionScheduler {
  private lastRunTime: Date | null = null;
  private isRunning = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    console.log('Initializing auction update scheduler...');
    
    // Run every hour ('0 * * * *')
    cron.schedule('0 * * * *', async () => {
      await this.runScheduledUpdate();
    });

    // Run immediately on startup
    this.runScheduledUpdate();
  }

  private async runScheduledUpdate() {
    if (this.isRunning) {
      console.log('Update already in progress, skipping...');
      return;
    }

    this.isRunning = true;
    const startTime = new Date();
    console.log(`Starting scheduled update at ${startTime.toISOString()}`);

    try {
      const auctions = await auctionScraper.scrapeAllSources();
      
      this.lastRunTime = new Date();
      const duration = (this.lastRunTime.getTime() - startTime.getTime()) / 1000;
      
      console.log(`
        Update completed successfully:
        - Time: ${this.lastRunTime.toISOString()}
        - Duration: ${duration.toFixed(2)} seconds
        - Auctions updated: ${auctions.length}
      `);

    } catch (error) {
      console.error('Error during scheduled update:', error);
      
      // In a production environment, you would:
      // 1. Send error notifications to monitoring service
      // 2. Log errors to a logging service
      // 3. Implement retry logic with backoff
      
    } finally {
      this.isRunning = false;
    }
  }

  public getLastRunTime(): Date | null {
    return this.lastRunTime;
  }

  public isUpdateInProgress(): boolean {
    return this.isRunning;
  }
}

// Create and export a singleton instance
export const auctionScheduler = new AuctionScheduler();

// Prevent the Node.js process from exiting
process.stdin.resume();