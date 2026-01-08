import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PortfolioAllocations = ({ data, totalValue }) => {
  const processedData = [];
  data.forEach((entry) => {
    if (entry.name === 'Token') {
      const segmentValue = entry.value / 20;
      for (let i = 0; i < 20; i++) {
        processedData.push({
          name: `Token-${i}`,
          value: segmentValue,
          color: '#FBB336',
          isToken: true
        });
      }
    } else {
      processedData.push({
        ...entry,
        isToken: false
      });
    }
  });

  return (
    <div className="dashboard-card p-6">
    <div className="stat-card-blur3 border  absolute right-1  top-10 h-16 w-1/2 "></div>
      <h2 className="text-xl font-semibold text-white mb-4">Portfolio Allocations</h2>
      
      <div className="h-32 mb-6 relative ">
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart >
            <defs >
              <filter id="innerShadow"  x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3.15" result="blur"/>
                <feOffset in="blur" dx="0" dy="0" result="offsetBlur"/>
                <feFlood floodColor="#000000" floodOpacity="0.5" result="color"/>
                <feComposite in="color" in2="offsetBlur" operator="in" result="shadow"/>
                <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
              </filter>
            </defs>
            <Pie
              data={processedData}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={0.5}
              dataKey="value"
              stroke="none"
            >
              {processedData.map((entry, index) => {
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    filter="url(#innerShadow)"
                    stroke="none"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/4 text-center ">
          <p className="text-gray-400 text-sm mb-1">Total portfolio</p>
          <p className="text-base font-bold text-white">{totalValue}</p>
        </div>
      </div>

      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="portfolio-allocation-item">
            <div className="flex items-center gap-2">
              <div 
                className="portfolio-allocation-dot" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-white text-sm font-normal">{item.name}</span>
            </div>
            <span className="text-white text-sm font-normal">{item.value.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioAllocations;

