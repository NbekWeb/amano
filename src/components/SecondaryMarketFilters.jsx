const SecondaryMarketFilters = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category.toLowerCase())}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              selectedCategory === category.toLowerCase()
                ? 'bg-primary/15 text-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Q Search..."
            className="w-full px-4 py-2 pl-10 bg-bg-dark border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SecondaryMarketFilters;

