import React from 'react';

const FunFacts: React.FC = () => {
  const facts = [
    {
      emoji: '☕',
      title: 'Coffee Enthusiast',
      description:
        'I fuel my development with espresso and curiosity. Always exploring new coffee blends while exploring new code patterns.',
    },
    {
      emoji: '🎮',
      title: 'Casual Gamer',
      description:
        'When not coding, you can find me playing indie games. I love puzzle-solving games that challenge my problem-solving skills.',
    },
    {
      emoji: '🌍',
      title: 'Travel Bug',
      description:
        'I love exploring new cities and cultures. Every trip teaches me something new about software, technology, and human interaction.',
    },
    {
      emoji: '📚',
      title: 'Lifelong Learner',
      description:
        'I spend weekends reading tech blogs, listening to podcasts, and tinkering with side projects to stay current.',
    },
    {
      emoji: '🎵',
      title: 'Music Lover',
      description:
        'Code sounds better with a good soundtrack. I have playlists for debugging, learning, and deep work sessions.',
    },
    {
      emoji: '🚀',
      title: 'Innovation Seeker',
      description:
        'Always looking for new technologies and better ways to build. Open source contributions and hackathons are my playground.',
    },
  ];

  return (
    <section className="fun-facts-section" aria-labelledby="fun-facts-heading">
      <div className="container">
        <h2 id="fun-facts-heading">Fun Facts About Me</h2>
        <p className="section-subtitle">
          Beyond the code – things that make me, me
        </p>

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
