import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const sidenavRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (e) => {
      if (isSideNavOpen && sidenavRef.current && !sidenavRef.current.contains(e.target)) {
        // Close the navigation menu if it's open and the click is outside the menu
        setIsSideNavOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isSideNavOpen]);

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  const sidenavStyle = {
    height: '100%',
    width: isSideNavOpen ? '250px' : '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#0C0C49',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
  };

  const mainStyle = {
    transition: 'margin-left .5s',
    padding: '16px',
    marginLeft: isSideNavOpen ? '250px' : '0',
  };
  
  const menuBarColor = "#1336A6";

 {/* {The upper Menu icon on the header is here} */}
  const menuIconStyle = {
    position: 'fixed',
    top: '35px',
    left: '20px',
    cursor: 'pointer',
    zIndex: '999', // Ensure the icon appears above other content
  }

  return (
    <div>
      <div id="mySidenav" style={sidenavStyle} ref={sidenavRef}>
        
          <div className="menu-h2">
          <Link to='/Home' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
          <h2>Home</h2>
          </Link>
          <h2>Projects</h2>
          <h2>Templates</h2>
          <Link to='/' style={{ textDecoration: 'none', color: '#f2f2f2' }}> {} 
          <h2>Logout</h2>
          </Link>
          </div>
      </div>

      <div id="main" style={mainStyle}>
        <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
          {/* Replace the icon with your custom SVG or icon */}
          {/* Example using your provided SVG: */}
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="50" 
          height="70" 
          viewBox="0 0 60 60"
          style={menuIconStyle}>
            <circle cx="30" cy="30" r="28" fill="#ffffff" />
            <line x1="15" y1="30" x2="45" y2="30" strokeWidth="4" stroke={menuBarColor} />
            <line x1="15" y1="40" x2="45" y2="40" strokeWidth="4" stroke={menuBarColor} />
            <line x1="15" y1="20" x2="45" y2="20" strokeWidth="4" stroke={menuBarColor} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SideNav;
