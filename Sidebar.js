import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div>
      {/* Main Navigation */}
      <header>
        {/* Sidebar */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to="/mainDashboard"
                className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/mainDashboard' ? 'active' : ''}`}
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </Link>
              <Link
                to="/control"
                className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/control' ? 'active' : ''}`}
              >
                <i className="fas fa-sliders-h fa-fw me-3"></i>
                <span>Control</span>
              </Link>

              <Link
                to="/movements"
                className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/movements' ? 'active' : ''}`}
              >
                <i className="fas fa-sliders-h fa-fw me-3"></i>
                <span>Movements</span>
              </Link>

              <Link
                to="/cameraFeed"
                className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/cameraFeed' ? 'active' : ''}`}
              >
                <i className="fas fa-video fa-fw me-3"></i>
                <span>Camera Feed</span>
              </Link>
              <Link
                to="/dataAnalytics"
                className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/dataAnalytics' ? 'active' : ''}`}
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Data Analytics</span>
              </Link>
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        {/* Navbar */}
        </header>

      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </div>
  );
}

export default Sidebar;
