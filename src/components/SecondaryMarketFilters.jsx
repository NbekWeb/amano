const SecondaryMarketFilters = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto mb-6 border border-white/10 p-1 rounded-lg">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.toLowerCase();
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category.toLowerCase())}
            className={`category-btn px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              isSelected ? "category-btn-active" : "category-btn-inactive"
            }`}
          >
            {isSelected && (
              <>
                <span className="category-btn-effect"></span>
                <span className="category-btn-tint"></span>
                <span className="category-btn-shine"></span>
              </>
            )}
            <span className={`category-btn-content ${isSelected ? "text-white" : "text-white/70"}`}>{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SecondaryMarketFilters;

