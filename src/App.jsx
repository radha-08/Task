// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  // Show loader when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800); // Loader duration (you can adjust)
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />

        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p className="loading-text">Loading...</p>
          </div>
        ) : (
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <Features />
                </>
              } 
            />
            
            <Route path="/about" element={<PageContent title="About Page" />} />
            <Route path="/fights" element={<PageContent title="Fights Page" />} />
            <Route path="/fighters" element={<PageContent title="Fighters Page" />} />
            <Route path="/origin" element={<PageContent title="GFC Origin" />} />
            <Route path="/sponsors" element={<PageContent title="Sponsors" />} />
            <Route path="/news" element={<PageContent title="News Page" />} />
            <Route path="/contact" element={<PageContent title="Contact Page" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

// Reusable Component for other pages
const PageContent = ({ title }) => {
  return (
    <div style={{
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      minHeight: '80vh',
      backgroundColor: '#000'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        {title}
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#aaa' }}>
        This page is under development...<br />
        Coming Soon
      </p>
    </div>
  );
};

export default App;