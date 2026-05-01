// src/components/Features.jsx
import '../App';

const features = [
  { 
    icon: "🔥", 
    title: "ELITE FIGHTS", 
    desc: "High-intensity matchups that create legends" 
  },
  { 
    icon: "📸", 
    title: "STORY FIRST", 
    desc: "We build fighters as personalities" 
  },
  { 
    icon: "👥", 
    title: "YOUTH CULTURE", 
    desc: "For the new generation of India" 
  },
  { 
    icon: "▶️", 
    title: "CONTENT ENGINE", 
    desc: "Reels, episodes & behind the scenes action" 
  },
  { 
    icon: "🌍", 
    title: "BUILT TO GO GLOBAL", 
    desc: "From India to the world stage" 
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;