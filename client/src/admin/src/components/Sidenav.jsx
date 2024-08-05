import React from 'react';
import styles from '../styles/Sidenav.css';

const Sidenav = () => {
  return (
    <aside className={styles.sidenav}>
      <div className={styles.sidenavHeader}>
        <h2>Admin</h2>
      </div>
      <nav className={styles.sidenavMenu}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Posts</a></li>
          <li><a href="#">Comments</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidenav;
