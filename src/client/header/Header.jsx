import React from 'react';
import classes from './Header.css';
import Logo from './Logo.jsx';

const Header = () => {
  return (
    <div className={classes.Header}>
      <Logo/>
      <h1>Stack Style</h1>
      <p>Wear you stack</p>
    </div>
  );
};

export default Header;