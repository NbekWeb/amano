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

