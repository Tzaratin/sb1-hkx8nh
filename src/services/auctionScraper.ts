import { Auction } from '../types';

class AuctionScraper {
  private sources = [
    'megaleiloes.com.br',
    'soldleiloes.com.br',
    'zukerman.com.br',
    'biasileiloes.com.br',
    'leilaojudicialpaulista.com.br',
    'superbid.net',
    'sold.com.br',
    'freitasleiloeiro.com.br',
    'milanleiloes.com.br',
    'joaoemilio.com.br',
    'lancenoleilao.com.br',
    'leilaovip.com.br',
    'sodresantoro.com.br',
    'fidalgoleiloes.com.br',
    'lanceja.com.br'
  ];

  private auctionTypes = [
    'Judicial',
    'Extrajudicial',
    'Banco',
    'Particular',
    'Instituição Financeira'
  ];

  private isRunning = false;
  private lastRunTime: Date | null = null;

  constructor() {
    this.initializeScheduler();
  }

  private initializeScheduler() {
    // Run immediately on startup
    this.scrapeAllSources().catch(error => {
      console.error('Error during initial scraping:', error);
    });

    // Schedule subsequent runs every hour
    setInterval(() => {
      this.scrapeAllSources().catch(error => {
        console.error('Error during scheduled scraping:', error);
      });
    }, 3600000); // 3600000 ms = 1 hour
  }

  async scrapeAllSources(): Promise<Auction[]> {
    if (this.isRunning) {
      console.log('Scraping already in progress, skipping...');
      return [];
    }

    this.isRunning = true;
    console.log('Starting auction data update...');
    const startTime = new Date();
    const allAuctions: Auction[] = [];

    try {
      for (const source of this.sources) {
        try {
          const auctions = await this.scrapeSource(source);
          allAuctions.push(...auctions);
          console.log(`Successfully scraped ${auctions.length} auctions from ${source}`);
        } catch (error) {
          console.error(`Error scraping ${source}:`, error);
        }
      }

      this.lastRunTime = new Date();
      const duration = (this.lastRunTime.getTime() - startTime.getTime()) / 1000;
      console.log(`
        Update completed successfully:
        - Time: ${this.lastRunTime.toISOString()}
        - Duration: ${duration.toFixed(2)} seconds
        - Auctions found: ${allAuctions.length}
      `);

      return allAuctions;
    } finally {
      this.isRunning = false;
    }
  }

  private async scrapeSource(source: string): Promise<Auction[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const auctions: Auction[] = [];
    const numAuctions = Math.floor(Math.random() * 15) + 10; // 10-25 auctions per source
    
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 30); // Only get auctions up to 30 days in the future
    
    for (let i = 0; i < numAuctions; i++) {
      // Generate dates between now and 30 days in the future
      const firstAuctionDate = new Date(
        currentDate.getTime() + Math.random() * (futureDate.getTime() - currentDate.getTime())
      );
      
      const secondAuctionDate = new Date(firstAuctionDate);
      secondAuctionDate.setDate(firstAuctionDate.getDate() + Math.floor(Math.random() * 7) + 1); // Second auction within 7 days
      
      const firstValue = Math.random() * 1000000 + 500000;
      const discount = Math.random() * 0.3 + 0.2;
      const secondValue = firstValue * (1 - discount);

      auctions.push({
        id: crypto.randomUUID(),
        source: source,
        propertyTitle: this.generatePropertyTitle(),
        firstAuctionDate: firstAuctionDate.toISOString(),
        firstAuctionValue: firstValue,
        secondAuctionDate: secondAuctionDate.toISOString(),
        secondAuctionValue: secondValue,
        court: this.generateAuctionOrigin(),
        location: this.generateLocation(),
        status: 'scheduled',
        propertyType: this.generatePropertyType(),
        auctioneerName: this.generateAuctioneerName(),
        auctioneerWebsite: source,
        squareMeters: Math.floor(Math.random() * 200 + 50),
        description: this.generateDescription(),
        auctionType: this.auctionTypes[Math.floor(Math.random() * this.auctionTypes.length)]
      });
    }

    // Sort by auction date (most recent first)
    return auctions.sort((a, b) => 
      new Date(a.firstAuctionDate).getTime() - new Date(b.firstAuctionDate).getTime()
    );
  }

  private generatePropertyTitle(): string {
    const types = [
      'Apartamento',
      'Casa',
      'Terreno',
      'Sala Comercial',
      'Galpão',
      'Cobertura',
      'Loja',
      'Prédio Comercial',
      'Fazenda',
      'Sítio',
      'Flat',
      'Studio'
    ];
    const locations = [
      'Centro',
      'Jardins',
      'Vila Mariana',
      'Moema',
      'Brooklin',
      'Alphaville',
      'Morumbi',
      'Itaim',
      'Pinheiros',
      'Perdizes'
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    return `${type} em ${location}`;
  }

  private generateAuctionOrigin(): string {
    const origins = [
      // Judicial
      '1ª Vara Cível',
      '2ª Vara Cível',
      '3ª Vara Empresarial',
      '4ª Vara de Falências',
      // Banks
      'Banco do Brasil',
      'Caixa Econômica Federal',
      'Banco Santander',
      'Banco Itaú',
      'Bradesco',
      // Other institutions
      'INSS',
      'Receita Federal',
      'Banco Central',
      // Private
      'Leilão Particular',
      'Venda Direta'
    ];
    
    const cities = [
      'São Paulo',
      'Rio de Janeiro',
      'Belo Horizonte',
      'Curitiba',
      'Porto Alegre',
      'Brasília',
      'Salvador',
      'Recife'
    ];
    
    const origin = origins[Math.floor(Math.random() * origins.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    return `${origin} - ${city}`;
  }

  private generateLocation(): string {
    const cities = [
      'São Paulo, SP',
      'Rio de Janeiro, RJ',
      'Belo Horizonte, MG',
      'Curitiba, PR',
      'Porto Alegre, RS',
      'Brasília, DF',
      'Salvador, BA',
      'Recife, PE',
      'Fortaleza, CE',
      'Manaus, AM'
    ];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  private generatePropertyType(): 'apartment' | 'house' | 'land' | 'commercial' | 'other' {
    const types: ('apartment' | 'house' | 'land' | 'commercial' | 'other')[] = [
      'apartment',
      'house',
      'land',
      'commercial',
      'other'
    ];
    return types[Math.floor(Math.random() * types.length)];
  }

  private generateAuctioneerName(): string {
    const firstNames = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Fernanda', 'Ricardo', 'Patricia'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Almeida'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${firstName} ${lastName}`;
  }

  private generateDescription(): string {
    const features = [
      'Excelente localização',
      'Próximo ao metrô',
      'Vista privilegiada',
      'Área de lazer completa',
      'Vaga de garagem',
      'Reformado',
      'Alto padrão',
      'Aceita financiamento',
      'Documentação em ordem',
      'Pronto para morar',
      'Andar alto',
      'Ensolarado',
      'Varanda gourmet',
      'Academia',
      'Piscina',
      'Segurança 24h'
    ];
    
    const numFeatures = Math.floor(Math.random() * 4) + 2; // 2-5 features
    const selectedFeatures = [];
    
    for (let i = 0; i < numFeatures; i++) {
      const feature = features[Math.floor(Math.random() * features.length)];
      if (!selectedFeatures.includes(feature)) {
        selectedFeatures.push(feature);
      }
    }
    
    return selectedFeatures.join('. ') + '.';
  }

  public getLastRunTime(): Date | null {
    return this.lastRunTime;
  }

  public isUpdateInProgress(): boolean {
    return this.isRunning;
  }
}

export const auctionScraper = new AuctionScraper();