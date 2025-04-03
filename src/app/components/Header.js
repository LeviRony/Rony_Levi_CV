import React from 'react';

const Header = ({ name, email, phone }) => {
  return (
    <header>
      <h1>{name}</h1>
      <div className="contact-info">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </header>
  );
};

export default Header;
