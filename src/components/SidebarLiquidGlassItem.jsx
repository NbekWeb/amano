const SidebarLiquidGlassItem = ({
  children,
  onClick,
  className = "",
  isActive = false,
  width = 197,
  height = 38,
  radius = 10,
}) => {
  const borderRadius = `${radius}px`;

  return (
    <button
      onClick={onClick}
      className={`sidebar-lg-item ${
        isActive ? "sidebar-lg-active" : ""
      } ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      {isActive && (
        <>
          <span className="sidebar-lg-effect" style={{ borderRadius }} />
          <span className="sidebar-lg-tint" style={{ borderRadius }} />
          <span className="sidebar-lg-shine" style={{ borderRadius }} />
        </>
      )}
      <span className="sidebar-lg-content">{children}</span>
    </button>
  );
};

export default SidebarLiquidGlassItem;
