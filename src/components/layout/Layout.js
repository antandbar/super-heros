import { Outlet } from 'react-router-dom';
import Header from './Header';

import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header className="layout-header" />
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">© 2022 SuperHeros</footer>
    </div>
  );
}

export default Layout;
