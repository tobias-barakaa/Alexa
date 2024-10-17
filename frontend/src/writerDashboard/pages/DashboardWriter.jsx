import React from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  CheckSquare,
  User,
  Bell,
  HelpCircle,
  Briefcase,
  
  Bell as BellIcon,
  DollarSignIcon
} from 'lucide-react';

const DashboardWriter = () => {
  const styles = {
    containerWriterDashboard: {
      display: 'flex',
      minHeight: '100vh',
    },
    sidewriter: {
      width: '300px',
      backgroundColor: '#f8f9fa',
      borderRight: '1px solid #e9ecef',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      marginBottom: '30px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    writerHeader: {
      height: '60px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e9ecef',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navSection: {
      marginBottom: '25px',
    },
    navTitle: {
      fontSize: '14px',
      color: '#6c757d',
      marginBottom: '10px',
      paddingLeft: '10px',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      marginBottom: '5px',
    },
    navItemTitle: {
      fontWeight: 'bold',
      color: '#333',
      fontSize: '14px',
    },
    navItemSubtitle: {
      color: '#6c757d',
      fontSize: '12px',
      marginLeft: '24px',
    },
    hiconn: {
      width: '18px',
      height: '18px',
      color: 'red',
    },
  };

  // CSS for hover effects
  const hoverStyles = `
    .nav-itemd:hover {
      background-color: #e9ecef;
    }
  `;

  const navItems = [
    {
      title: 'My Projects',
      icon: <Briefcase style={styles.icon} />,
      subitems: [
        { title: 'Ongoing Projects', subtitle: 'List of projects the writer is currently working on' },
        { title: 'Completed Projects', subtitle: 'History of completed projects' },
        { title: 'New Project Opportunities', subtitle: 'New writing opportunities the writer can accept' },
      ],
    },
   
    {
      title: 'Earnings & Payments',
      icon: <DollarSignIcon style={styles.icon} />,
      subitems: [
        { title: 'Current Balance', subtitle: 'Amount earned so far' },
        { title: 'Payout History', subtitle: 'Details of payments received' },
        { title: 'Pending Payouts', subtitle: 'Any pending payments' },
      ],
    },
    {
      title: 'Tasks',
      icon: <CheckSquare style={styles.icon} />,
      subitems: [
        { title: 'Due Today', subtitle: 'Writing tasks that need to be completed today' },
        { title: 'Upcoming Tasks', subtitle: 'Tasks due soon' },
        { title: 'Completed Tasks', subtitle: 'History of completed tasks' },
      ],
    },
    {
      title: 'Profile & Settings',
      icon: <User style={styles.icon} />,
      subitems: [
        { title: 'Profile Info', subtitle: "Writer's personal details" },
        { title: 'Account Settings', subtitle: 'Change password, email, etc.' },
        { title: 'Payment Settings', subtitle: 'Configure payment methods' },
      ],
    },
    {
      title: 'Notifications',
      icon: <Bell style={styles.icon} />,
      subitems: [
        { title: 'Unread Notifications', subtitle: 'Important messages or alerts' },
        { title: 'All Notifications', subtitle: 'Full list of notifications' },
      ],
    },
    {
      title: 'Support & Help',
      icon: <HelpCircle style={styles.icon} />,
      subitems: [
        { title: 'FAQs', subtitle: 'Frequently asked questions' },
        { title: 'Contact Support', subtitle: 'Reach out to support for help' },
      ],
    },
  ];

  return (
    <>
      <style>{hoverStyles}</style>
      <div style={styles.containerWriterDashboard}>
        {/* Sidebar */}
        <aside style={styles.sidewriter}>
          <div style={styles.logo}>
            <LayoutDashboard size={24} />
            <span style={styles.logoText}>Writer Dashboard</span>
          </div>
          
          {navItems.map((section, index) => (
            <div key={index} style={styles.navSection}>
              <div style={styles.hiconn}>{section.icon}</div>
              <div style={styles.navTitle}>{section.title}</div>

              {section.subitems.map((item, subIndex) => (
                <div key={subIndex} className="nav-itemd" style={styles.navItem}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={styles.navItemTitle}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </aside>

        {/* Main Content Area */}
        <main style={styles.mainContent}>
          {/* Header */}
          <header className="writer-header" style={styles.writerHeader}>
            <div>Welcome back, Writer!</div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <BellIcon size={20} />
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e9ecef' }} />
            </div>
          </header>
          
          {/* Dashboard content will go here */}
          <div style={{ padding: '20px' }}>
            {/* We'll add the dashboard content in the next iteration */}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardWriter;