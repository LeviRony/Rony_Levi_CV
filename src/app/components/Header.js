import React from 'react';

const Header = ({ name, email, phone }) => {
  return (
    <header>
      <div className="contact-info">
        <h1>{name}</h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </header>
  );
};

export default Header;
