import React, { useState } from 'react';
import profileData from '../data/profile.json';

const Hero: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const hero = profileData.hero;

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">{hero.headline}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-buttons">
          <div
            className="btn-wrapper"
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
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
            <a href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
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
