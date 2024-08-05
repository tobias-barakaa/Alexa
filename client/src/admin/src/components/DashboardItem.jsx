const DashboardItem = ({ title, value }) => {
  return (
    <div className="dashboard-item">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DashboardItem;