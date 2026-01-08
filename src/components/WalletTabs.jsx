const WalletTabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="flex gap-2 border rounded-lg w-full border-white/10 p-1 mb-4">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`wallet-tab-btn px-4 py-2 font-medium transition-all rounded-lg ${
              isSelected ? "wallet-tab-btn-active" : "wallet-tab-btn-inactive"
            }`}
          >
            {isSelected && (
              <>
                <span className="wallet-tab-btn-effect"></span>
                <span className="wallet-tab-btn-tint"></span>
                <span className="wallet-tab-btn-shine"></span>
              </>
            )}
            <span className="wallet-tab-btn-content">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default WalletTabs;

