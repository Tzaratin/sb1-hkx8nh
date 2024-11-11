import React, { useState } from 'react';
import { Building2, Search } from 'lucide-react';
import { mockAuctions } from './data/mockAuctions';
import { AuctionCard } from './components/AuctionCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filterAndSortAuctions = () => {
    // Filter auctions based on search term only
    const filtered = searchTerm 
      ? mockAuctions.filter(auction => 
          auction.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          auction.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          auction.court.toLowerCase().includes(searchTerm.toLowerCase()) ||
          auction.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : mockAuctions;

    // Sort auctions by status and date
    return filtered.sort((a, b) => {
      // First, prioritize auctions from 2024
      const yearA = new Date(a.secondAuctionDate).getFullYear();
      const yearB = new Date(b.secondAuctionDate).getFullYear();
      if (yearA === 2024 && yearB !== 2024) return -1;
      if (yearB === 2024 && yearA !== 2024) return 1;

      // Then sort by status (prioritize active auctions)
      if (a.status === 'in_progress' && b.status !== 'in_progress') return -1;
      if (b.status === 'in_progress' && a.status !== 'in_progress') return 1;
      
      // Finally sort by date (most recent first)
      const dateA = new Date(a.secondAuctionDate);
      const dateB = new Date(b.secondAuctionDate);
      return dateB.getTime() - dateA.getTime();
    });
  };

  const filteredAuctions = filterAndSortAuctions();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Leilões Judiciais</h1>
            </div>
            <div className="relative w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Pesquisar por localização, vara, título ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Sobre o Sistema</h2>
          <p className="text-gray-600">
            Este sistema coleta automaticamente informações sobre leilões judiciais de imóveis 
            de diversos sites de leilões. Acompanhe todos os leilões em andamento, agendados e finalizados 
            em uma única plataforma.
          </p>
        </div>

        <div className="lg:col-span-3">
          {filteredAuctions.length > 0 && (
            <div className="mb-4 text-sm text-gray-600">
              Mostrando {filteredAuctions.length} leilões ordenados por data mais recente
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>

          {filteredAuctions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum leilão encontrado com os critérios de busca atuais.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Sistema de Monitoramento de Leilões Judiciais
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;