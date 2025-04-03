import React from 'react';

const Header = ({ name, title, email, phone, location }) => {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="contact-info">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>location</p>
      </div>
    </header>
  );
};

export default Header;
