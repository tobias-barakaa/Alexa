import DashboardItem from '../components/DashboardItem';
import "../styles/DashboardAdmin.css";
const DashboardAdmin = () => {
  const dashboardData = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Revenue', value: '$56,789' },
    { title: 'New Orders', value: '42' },
    { title: 'Product Categories', value: '15' },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-grid">
        {dashboardData.map((item, index) => (
          <DashboardItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default DashboardAdmin;