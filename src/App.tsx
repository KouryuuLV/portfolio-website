import React, { useState } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import FunFacts from './components/FunFacts';
import CodeExamples from './components/CodeExamples';
import Gallery from './components/Gallery';
import LicenseModal from './components/LicenseModal';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  const imageLicenses = [
    {
      id: 'picsum',
      source: 'Picsum Photos',
      url: 'https://picsum.photos',
      details:
        'Placeholder images provided for demo and prototyping. Replace with final licensed assets for production use.'
    }
  ];

  return (
    <div className="app">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      <header>
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="nav-container">
            <h1 className="nav-logo">MyPortfolio</h1>
            <ul className="nav-menu" role="menubar">
              <li role="none">
                <a href="#hero" className="nav-link" role="menuitem">
                  Home
                </a>
              </li>
              <li role="none">
                <a href="#education" className="nav-link" role="menuitem">
                  Life Timeline
                </a>
              </li>
              <li role="none">
                <a href="#code-examples" className="nav-link" role="menuitem">
                  Code
                </a>
              </li>
              <li role="none">
                <a href="#gallery" className="nav-link" role="menuitem">
                  Gallery
                </a>
              </li>
              <li role="none">
                <a href="#fun-facts" className="nav-link" role="menuitem">
                  About
                </a>
              </li>
              <li role="none">
                <a href="#contact" className="nav-link" role="menuitem">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main-content" className="main-content" role="main">
        <section id="hero" aria-labelledby="hero-heading">
          <Hero />
        </section>

        <section id="education" aria-labelledby="education-heading">
          <Education />
        </section>

        <section id="code-examples" aria-labelledby="code-examples-heading">
          <CodeExamples />
        </section>

        <section id="gallery" aria-labelledby="gallery-heading">
          <Gallery />
        </section>

        <section id="fun-facts" aria-labelledby="fun-facts-heading">
          <FunFacts />
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <ContactMe />
        </section>
      </main>

      <LicenseModal
        isOpen={isLicenseOpen}
        onClose={() => setIsLicenseOpen(false)}
        licenses={imageLicenses}
      />

      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>
            &copy; 2024 My Portfolio. Built with React, TypeScript, and Vite.
          </p>
          <p>All rights reserved. Designed with ❤️ and code.</p>
          <button
            type="button"
            className="footer-link"
            onClick={() => setIsLicenseOpen(true)}
            aria-label="Open image license information"
          >
            Image license information
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
