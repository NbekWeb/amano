import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = ({ children, currentPage, setCurrentPage, hideSidebar = false }) => {
  return (
    <>
      <svg style={{ display: 'none' }} className="liquid-glass-filter">
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div className="flex h-screen bg-bg-base overflow-hidden">
        {!hideSidebar && (
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav />
          <main className="flex-1 p-6 overflow-x-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;

