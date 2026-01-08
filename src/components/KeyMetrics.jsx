import LiquidGlassButton from "./LiquidGlassButton";
const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="dashboard-card p-4 ">
            <div className="stat-card-blur w-30 h-12 absolute top-5 -right-5 flex"></div>

            {Icon && (
              <LiquidGlassButton width={47} height={47} radius="full">
                <Icon />
              </LiquidGlassButton>
            )}

            <p className="text-gray-400 text-xs mb-1 mt-3">{metric.label} </p>
            <p className="text-white text-xl font-bold">{metric.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default KeyMetrics;
