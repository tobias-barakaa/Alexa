import "../styles/Sidenav.css";

const Sidenav = () => {
  const menuItems = ['Dashboard', 'Users', 'Products', 'Orders', 'Analytics', 'Settings'];

  return (
    <div className="sidenav">
      <h2>Admin Dashboard</h2>
      {menuItems.map((item, index) => (
        <div key={index} className="nav-item">{item}</div>
      ))}
    </div>
  );
};

export default Sidenav;