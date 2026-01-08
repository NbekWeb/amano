import { useNavigate } from "react-router-dom";
import highIcon from "../assets/img/high.svg";
import locIcon from "../assets/img/loc.svg";
import LiquidGlassButton from "./LiquidGlassButton";
const SecondaryMarketTable = ({ assets }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full portfolio-table">
        <thead>
          <tr className="portfolio-table-head text-left">
            <th>Asset</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>24h High</th>
            <th>24h Low</th>
            <th>Volume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="portfolio-table-row">
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={asset.image}
                    alt={asset.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-white font-medium">{asset.name}</div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <img
                        src={locIcon}
                        alt="location"
                        className="w-3 h-3 opacity-70"
                      />
                      <span>{asset.location}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 text-white font-medium">{asset.price}</td>
              <td className="py-4">
                <div className="flex items-center gap-1.5 text-success">
                  <img src={highIcon} alt="trend" className="w-3 h-3" />
                  <span>{asset.change24h}</span>
                </div>
              </td>
              <td className="py-4 text-white">{asset.high24h}</td>
              <td className="py-4 text-white">{asset.low24h}</td>
              <td className="py-4 text-white">{asset.volume}</td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <LiquidGlassButton
                    width="auto"
                    height={36}
                    radius="8"
                    onClick={() => navigate(`/property/${asset.id}`)}
                  >
                    <div className="px-4 py-2 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors">
                      Details
                    </div>
                  </LiquidGlassButton>
                  <button
                    onClick={() => navigate(`/trading/${asset.id}`)}
                    className="px-4 h-9 flex items-center bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
                  >
                    Trade
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecondaryMarketTable;
