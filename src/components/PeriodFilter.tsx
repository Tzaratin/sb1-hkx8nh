import React from 'react';
import { Clock } from 'lucide-react';

interface PeriodFilterProps {
  selectedPeriod: number | null;
  onPeriodChange: (days: number) => void;
}

export const PeriodFilter: React.FC<PeriodFilterProps> = ({ selectedPeriod, onPeriodChange }) => {
  const periods = [
    { days: 30, label: '30 dias' },
    { days: 60, label: '60 dias' },
    { days: 90, label: '90 dias' },
    { days: 120, label: '120 dias' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center mb-4">
        <Clock className="h-5 w-5 text-blue-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">Período sem Lances</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {periods.map(({ days, label }) => (
          <button
            key={days}
            onClick={() => onPeriodChange(days)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${selectedPeriod === days
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};