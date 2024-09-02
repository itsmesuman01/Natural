import React from 'react';
import { images } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const NavItem = ({ children }) => (
  <div className="border-l border-white px-4 py-2">
    {children}
  </div>
);

const Topbar = ({ setShowLogin }) => {
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <div className="flex text-white bg-yellow-500 h-20">
      <div className="left flex-1 flex items-center h-full">
        <img src={images.logo} alt="logo" className="h-4/5 w-auto" />
      </div>
      <div className="right flex-1 flex flex-row justify-between items-center p-4">
        {navItems.map((item, index) => (
          <NavItem key={item}>
            <NavLink to={item === 'Home' ? '/' : item}>{item}</NavLink>
          </NavItem>
        ))}
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
}

export default Topbar;
