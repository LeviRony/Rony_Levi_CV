import React from 'react';

<<<<<<< HEAD
const Header = ({ name, title, email, phone, location }) => {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="contact-info">
=======
const Header = ({ name, email, phone }) => {
  return (
    <header>
      <div className="contact-info">
        <h1>{name}</h1>
>>>>>>> main
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </header>
  );
};

export default Header;
