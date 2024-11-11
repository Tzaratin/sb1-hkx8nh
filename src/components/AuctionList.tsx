import React from 'react';
import { AuctionCard } from './AuctionCard';
import { Auction } from '../types';

interface AuctionListProps {
  auctions: Auction[];
}

export const AuctionList: React.FC<AuctionListProps> = ({ auctions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
      
      {auctions.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum leilão encontrado com os critérios atuais.
          </p>
        </div>
      )}
    </div>
  );
};