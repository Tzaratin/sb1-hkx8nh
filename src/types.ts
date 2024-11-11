export interface Auction {
  id: string;
  source: string;
  propertyTitle: string;
  firstAuctionDate: string;
  firstAuctionValue: number;
  secondAuctionDate: string;
  secondAuctionValue: number;
  court: string;
  location: string;
  status: 'no_bids' | 'completed' | 'cancelled' | 'scheduled' | 'in_progress';
  propertyType: 'apartment' | 'house' | 'land' | 'commercial' | 'other';
  auctioneerName: string;
  auctioneerWebsite: string;
  squareMeters?: number;
  description?: string;
  winningBid?: number;
}

export interface AuctionFilters {
  dateRange: number;
  propertyType: string[];
  location: string[];
  priceRange: {
    min: number;
    max: number;
  };
  status: string[];
}