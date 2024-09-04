import React, { useState, useEffect, useRef } from "react";
import { main } from "../assets/assets";
import { NavLink } from "react-router-dom";

const NavItem = ({ children }) => (
  <div className="border-l border-white px-4 py-2">{children}</div>
);

const Topbar = ({ setShowLogin }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadedIn, setIsFadedIn] = useState(true);
  const timerRef = useRef(null);
  const fadeInTimerRef = useRef(null);

  // Function to start or reset the hide timer
  const startHideTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
      setIsFadedIn(false);
    }, 3000); // Hide after 3 seconds of inactivity
  };

  // Function to start or reset the fade-in timer
  const startFadeInTimer = () => {
    clearTimeout(fadeInTimerRef.current);
    fadeInTimerRef.current = setTimeout(() => {
      setIsFadedIn(true);
    }, 20); // Fade in after 1 second of activity
  };

  // Function to handle visibility on mouse move or scroll
  const handleActivity = () => {
    setIsVisible(true);
    startFadeInTimer(); // Restart the fade-in timer
    startHideTimer(); // Restart the hide timer
  };

  useEffect(() => {
    // Setup event listeners
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("mouseenter", handleActivity);
    document.addEventListener("mouseleave", handleActivity);
    window.addEventListener("scroll", handleActivity);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("mouseenter", handleActivity);
      document.removeEventListener("mouseleave", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      clearTimeout(timerRef.current);
      clearTimeout(fadeInTimerRef.current);
    };
  }, []);

  return (
    <div
      className={`animate-fadeIn flex text-white bg-yellow-500 bg-opacity-50 h-20 fixed w-full top-0 left-0 z-50 transition-opacity duration-300 ${
        isVisible ? (isFadedIn ? "opacity-100" : "opacity-0") : "opacity-0"
      }`}
      onMouseEnter={handleActivity}
      onMouseLeave={handleActivity}
    >
      <div className="left flex-1 flex items-center h-full">
        <img src={main.logo} alt="logo" className="h-4/5 w-auto" />
      </div>
      <div className="right flex-1 flex flex-row justify-between items-center p-4">
        {["Home", "About", "Contact"].map((item) => (
          <NavItem key={item}>
            <NavLink to={item === "Home" ? "/" : item}>{item}</NavLink>
          </NavItem>
        ))}
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Topbar;
