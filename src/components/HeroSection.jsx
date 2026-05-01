import '../App';

const HeroSection = () => {
  const handleGetTickets = () => {
    alert("🎟️ Tickets booking coming soon!");
    // You can later connect this to a modal or booking page
  };

  const handleWatchTrailer = () => {
    alert("▶️ Trailer will play here!");
    // You can later open a YouTube video or modal
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Left Side - Text */}
        <div className="hero-content">
          <p className="hero-subtitle">GFC GLOBAL 1: ORIGIN</p>
          
          <h1 className="hero-title">
            FIGHTS.<br />
            STORIES.<br />
            <span>LEGENDS.</span>
          </h1>

          <p className="hero-desc">
            India's Next Combat Sports Movement
          </p>

          <div className="hero-buttons">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleGetTickets}
            >
              GET TICKETS
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleWatchTrailer}
            >
              ▶ WATCH TRAILER
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image-container">
          <img 
         src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQM3wbtE4EVHRCJPdkD4pQMhhSc2qE7HwOVLdW_OPDMPUNOxb0B"      alt="GFC Fighter"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;