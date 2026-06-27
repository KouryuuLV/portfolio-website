import React from 'react';
import profileData from '../../data/profile.json';

const FunFacts: React.FC = () => {
  const facts = profileData.funFacts.items;

  return (
    <section className="fun-facts-section" aria-labelledby="fun-facts-heading">
      <div className="container">
        <h2 id="fun-facts-heading">{profileData.funFacts.heading}</h2>
        <p className="section-subtitle">{profileData.funFacts.subtitle}</p>

        <div className="facts-grid" role="list" aria-label="Personal fun facts">
          {facts.map((fact, index) => (
            <div key={index} className="fact-card" role="listitem">
              <div className="fact-emoji" aria-hidden="true">
                {fact.emoji}
              </div>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
