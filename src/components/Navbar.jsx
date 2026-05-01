// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetTickets = () => {
    alert("🎟️ Get Tickets functionality coming soon!");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo - Visible on both Desktop and Mobile */}
        <div className="logo">
          <div className="logo-text">GFC</div>
          <div className="logo-subtext">
            GLOBAL FIGHTING<br />CHAMPIONSHIP
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/fights">FIGHTS</Link>
          <Link to="/fighters">FIGHTERS</Link>
          <Link to="/origin">GFC ORIGIN</Link>
          <Link to="/sponsors">SPONSORS</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        {/* GET TICKETS Button */}
        <button 
          type="button" 
          className="ticket-btn"
          onClick={handleGetTickets}
        >
          GET TICKETS
        </button>

        {/* Hamburger - Only Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>HOME</Link>
          <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
          <Link to="/fights" onClick={toggleMenu}>FIGHTS</Link>
          <Link to="/fighters" onClick={toggleMenu}>FIGHTERS</Link>
          <Link to="/origin" onClick={toggleMenu}>GFC ORIGIN</Link>
          <Link to="/sponsors" onClick={toggleMenu}>SPONSORS</Link>
          <Link to="/news" onClick={toggleMenu}>NEWS</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;