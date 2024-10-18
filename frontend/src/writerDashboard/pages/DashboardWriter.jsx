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
  DollarSignIcon,
  AccessibilityIcon,
  Component,
  BellDotIcon
} from 'lucide-react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';

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
      fontSize: '20px',
      color: '#000000',
      marginBottom: '10px',
      paddingLeft: '10px',
      fontWeight: '800',
    },
    // color: '#202020',
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
      fontWeight: '500',
      color: '#202020',
      fontSize: '16px',
    },
    navItemSubtitle: {
      color: '#202020',
      fontSize: '12px',
      marginLeft: '24px',
    },
    hiconn: {
      width: '10px',
      height: '10px',
      color: '#202020',
      paddingRight: "30px"
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
     
      subitems: [
        { title: 'Ongoing', icon: <Briefcase style={styles.icon} />, },
        { title: 'Completed', icon: <Component style={styles.icon} />, },
        { title: 'New ', icon: <BellDotIcon style={styles.icon} />, },
      ],
    },
   
    {
      title: 'Earnings & Payments',
      icon: <DollarSignIcon style={styles.icon} />,
      subitems: [
        { title: 'Current Balance', subtitle: 'Amount earned so far', icon: <DollarSignIcon style={styles.icon} />, },
        { title: 'Payout History', icon: <DollarSignIcon style={styles.icon} />, },
        { title: 'Pending Payouts', icon: <DollarSignIcon style={styles.icon} />, },
      ],
    },
    {
      title: 'Tasks',
      icon: <CheckSquare style={styles.icon} />,
      subitems: [
        { title: 'Due Today', icon: <CheckSquare style={styles.icon} />, },
        { title: 'Upcoming Tasks', icon: <CheckSquare style={styles.icon} />, },
        { title: 'Completed Tasks', icon: <CheckSquare style={styles.icon} />, },
      ],
    },
    {
      title: 'Profile & Settings',
      
      subitems: [
        { title: 'Profile Info', icon: <User style={styles.icon} /> },
        { title: 'Account Settings',  icon: <FaMoneyCheck style={styles.icon} />, },
        { title: 'Payment Settings', icon: <FaMoneyCheck style={styles.icon} />, },
        
      ],
    },
    {
      title: 'Notifications',
      icon: <Bell style={styles.icon} />,
      subitems: [
        { title: 'Unread Notifications', icon: <CheckSquare style={styles.icon} />, },
        { title: 'All Notifications', icon: <CheckSquare style={styles.icon} />, },
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
              <div style={styles.navTitle}>{section.title}</div>

              {section.subitems.map((item, subIndex) => (
                <div key={subIndex} className="nav-itemd" style={styles.navItem}>
                  <div style={{ display: 'flex' }}>
              <div style={styles.hiconn}>{item.icon}</div>

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