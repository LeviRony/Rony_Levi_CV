import React from 'react';
import styles from "../page.module.css"

const Header = ({ name, email, phone }) => {
  return (
    <header>
      <h1>{name}</h1>
      <div className={styles.contactInfo}>
        <p>Email: <a className={styles.email}>{email}</a></p>
        <p>Phone: {phone}</p>
      </div>
    </header>
  );
};

export default Header;
