import React from 'react';
import { Building2, MapPin, Scale, Calendar, SquareStack, AlertCircle } from 'lucide-react';
import { Auction } from '../types';

interface AuctionCardProps {
  auction: Auction;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

const calculateDiscount = (original: number, final: number) => {
  return Math.round(((original - final) / original) * 100);
};

const getStatusColor = (status: string) => {
  const colors = {
    scheduled: 'bg-blue-500',
    in_progress: 'bg-yellow-500',
    no_bids: 'bg-purple-500',
    completed: 'bg-green-500',
    cancelled: 'bg-red-500'
  };
  return colors[status] || 'bg-gray-500';
};

const getStatusText = (status: string) => {
  const texts = {
    scheduled: 'Agendado',
    in_progress: 'Em Andamento',
    no_bids: 'Sem Lances',
    completed: 'Finalizado',
    cancelled: 'Cancelado'
  };
  return texts[status] || status;
};

export const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
  const discount = calculateDiscount(auction.firstAuctionValue, auction.secondAuctionValue);
  const statusColor = getStatusColor(auction.status);
  const statusText = getStatusText(auction.status);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white">{auction.propertyTitle}</h3>
          <div className="flex space-x-2">
            <span className={`${statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {statusText}
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {discount}% desconto
            </span>
          </div>
        </div>
        <p className="text-blue-100 text-sm mt-1">{auction.source}</p>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center text-gray-600">
          <Scale className="w-5 h-5 mr-2 text-blue-600" />
          <span className="text-sm">{auction.court}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
          <span className="text-sm">{auction.location}</span>
        </div>

        {auction.squareMeters && (
          <div className="flex items-center text-gray-600">
            <SquareStack className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm">{auction.squareMeters}m²</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-1 text-blue-600" />
              <p className="text-sm text-gray-600">1º Leilão</p>
            </div>
            <p className="font-semibold text-gray-800">{formatCurrency(auction.firstAuctionValue)}</p>
            <p className="text-sm text-gray-500">{formatDate(auction.firstAuctionDate)}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-1 text-blue-600" />
              <p className="text-sm text-gray-600">2º Leilão</p>
            </div>
            <p className="font-semibold text-gray-800">{formatCurrency(auction.secondAuctionValue)}</p>
            <p className="text-sm text-gray-500">{formatDate(auction.secondAuctionDate)}</p>
          </div>
        </div>

        {auction.winningBid && auction.status === 'completed' && (
          <div className="bg-green-50 p-3 rounded-md mt-3">
            <div className="flex items-center text-green-700">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Lance Vencedor: {formatCurrency(auction.winningBid)}</span>
            </div>
          </div>
        )}

        {auction.description && (
          <p className="text-sm text-gray-600 mt-3 border-t pt-3">
            {auction.description}
          </p>
        )}

        <a
          href={`https://${auction.auctioneerWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
        >
          Ver no site do leiloeiro
        </a>
      </div>
    </div>
  );
};