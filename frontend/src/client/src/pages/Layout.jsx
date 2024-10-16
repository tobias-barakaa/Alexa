// src/components/Layout.js

import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
