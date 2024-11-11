import React from 'react';
import { Filter, Calendar } from 'lucide-react';
import { AuctionFilters } from '../types';

interface FilterPanelProps {
  filters: AuctionFilters;
  onFilterChange: (filters: AuctionFilters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const propertyTypes = [
    { value: 'apartment', label: 'Apartamento' },
    { value: 'house', label: 'Casa' },
    { value: 'land', label: 'Terreno' },
    { value: 'commercial', label: 'Comercial' },
    { value: 'other', label: 'Outros' }
  ];
  
  const statusTypes = [
    { value: 'scheduled', label: 'Agendado' },
    { value: 'in_progress', label: 'Em Andamento' },
    { value: 'no_bids', label: 'Sem Lances' },
    { value: 'completed', label: 'Finalizado' },
    { value: 'cancelled', label: 'Cancelado' }
  ];

  const handlePropertyTypeChange = (type: string) => {
    const updatedTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    
    onFilterChange({
      ...filters,
      propertyType: updatedTypes
    });
  };

  const handleStatusChange = (status: string) => {
    const updatedStatus = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    
    onFilterChange({
      ...filters,
      status: updatedStatus
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-blue-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Status do Leilão
          </label>
          <div className="space-y-2">
            {statusTypes.map(({ value, label }) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                  checked={filters.status.includes(value)}
                  onChange={() => handleStatusChange(value)}
                />
                <span className="text-sm text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Período
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.dateRange}
              onChange={(e) => onFilterChange({ ...filters, dateRange: Number(e.target.value) })}
            >
              <option value={7}>Últimos 7 dias</option>
              <option value={15}>Últimos 15 dias</option>
              <option value={30}>Últimos 30 dias</option>
              <option value={60}>Últimos 60 dias</option>
              <option value={90}>Últimos 90 dias</option>
              <option value={180}>Últimos 6 meses</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Tipo de Imóvel
          </label>
          <div className="space-y-2">
            {propertyTypes.map(({ value, label }) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                  checked={filters.propertyType.includes(value)}
                  onChange={() => handlePropertyTypeChange(value)}
                />
                <span className="text-sm text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Faixa de Preço (2ª Praça)
          </label>
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Valor mínimo"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={filters.priceRange.min || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: { ...filters.priceRange, min: Number(e.target.value) }
              })}
            />
            <input
              type="number"
              placeholder="Valor máximo"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={filters.priceRange.max || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: { ...filters.priceRange, max: Number(e.target.value) }
              })}
            />
          </div>
        </div>

        <button
          onClick={() => onFilterChange({
            dateRange: 30,
            propertyType: [],
            location: [],
            priceRange: { min: 0, max: 0 },
            status: []
          })}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
};