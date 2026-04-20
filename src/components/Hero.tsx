import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Full Stack Developer | Cloud, DevOps & Web Systems
        </p>
        <p className="hero-description">
          Building secure, scalable IT experiences with modern web technology
          and best practices.
        </p>
        <div className="hero-buttons">
          <div 
            className="btn-wrapper"
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
            {hoveredButton === 'contact' && (
              <div className="btn-tooltip" role="tooltip">
                Navigate to the contact section to get in touch
              </div>
            )}
          </div>

          <div 
            className="btn-wrapper"
            onMouseEnter={() => setHoveredButton('work')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <a
              href="#code-examples"
              className="btn btn-secondary"
            >
              See My Work
            </a>
            {hoveredButton === 'work' && (
              <div className="btn-tooltip" role="tooltip">
                Navigate to the code examples section to see my work
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hero-decoration" aria-hidden="true">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
