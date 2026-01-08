import { useState } from 'react';
import CoinIcon from '../components/icons/coin';
import nImage from '../assets/img/n.png';
import SecondaryMarketStats from '../components/SecondaryMarketStats';
import SecondaryMarketFilters from '../components/SecondaryMarketFilters';
import SecondaryMarketTable from '../components/SecondaryMarketTable';

const SecondaryMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Real estate', 'Energy', 'Commodities', 'Art', 'Startups', 'Bond'];

  const stats = [
    {
      icon: <CoinIcon />,
      label: 'Total Volume',
      value: '$3.4M',
      change: '+12.5%',
    },
    {
      icon: <CoinIcon />,
      label: 'Active Traders',
      value: '1,247',
      change: '+8.2%',
    },
    {
      icon: <CoinIcon />,
      label: 'Total Trades',
      value: '3,821',
      change: '+15.3%',
    },
  ];

  const assets = [
    {
      id: 1,
      image: nImage,
      name: 'Tech Startup Portf...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 2,
      image: nImage,
      name: 'Green Energy Fund',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 3,
      image: nImage,
      name: 'Tech Fund Alpha',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 4,
      image: nImage,
      name: 'Healthcare Innova...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 5,
      image: nImage,
      name: 'Tech Startup Portf...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 6,
      image: nImage,
      name: 'Green Energy Fund',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Secondary Market</h1>
        <p className="text-gray-400 text-sm">Trade assets with live order books and real-time pricing</p>
      </div>

      <SecondaryMarketStats stats={stats} />

      <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute transform -translate-x-1/2 left-1/2 bottom-4 h-10 w-1/2"></div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Available Assets</h2>
        </div>

        <div className="mb-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 bg-bg-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <SecondaryMarketFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <SecondaryMarketTable assets={assets} />
      </div>
    </div>
  );
};

export default SecondaryMarket;

