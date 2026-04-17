import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Full Stack Developer | React & TypeScript Specialist
        </p>
        <p className="hero-description">
          Crafting beautiful, performant web experiences with modern
          technologies and best practices.
        </p>
        <div className="hero-buttons">
          <a
            href="#contact"
            className="btn btn-primary"
            aria-describedby="contact-description"
          >
            Get In Touch
          </a>
          <span id="contact-description" className="sr-only">
            Navigate to the contact section to get in touch
          </span>
          <a
            href="#code-examples"
            className="btn btn-secondary"
            aria-describedby="work-description"
          >
            See My Work
          </a>
          <span id="work-description" className="sr-only">
            Navigate to the code examples section to see my work
          </span>
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
