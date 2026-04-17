import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/seed/tech-dashboard/800/600',
      alt: 'IT dashboard with data visualizations',
      title: 'IT Dashboard',
      description: 'Visual metrics and infrastructure analytics for modern operations.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    },
    {
      id: 2,
      src: 'https://picsum.photos/seed/coding-setup/800/600',
      alt: 'Code editor with working session open',
      title: 'Developer Workspace',
      description: 'Clean workspaces designed to support productivity and clarity.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    },
    {
      id: 3,
      src: 'https://picsum.photos/seed/cloud-architecture/800/600',
      alt: 'Cloud architecture diagram on a screen',
      title: 'Cloud Systems',
      description: 'Scalable cloud architecture and deployment pipeline visuals.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    },
    {
      id: 4,
      src: 'https://picsum.photos/seed/cybersecurity/800/600',
      alt: 'Cybersecurity monitoring and alert screens',
      title: 'Security Monitoring',
      description: 'Proactive protection and monitoring for critical IT systems.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    },
    {
      id: 5,
      src: 'https://picsum.photos/seed/server-rack/800/600',
      alt: 'Server rack and network equipment',
      title: 'Infrastructure',
      description: 'Reliable infrastructure engineering for uptime and availability.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    },
    {
      id: 6,
      src: 'https://picsum.photos/seed/devops/800/600',
      alt: 'DevOps workflow with automation tools',
      title: 'DevOps Workflow',
      description: 'Automation and continuous delivery to support fast release cycles.',
      source: 'Picsum Photos',
      sourceUrl: 'https://picsum.photos'
    }
  ];

  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery-intro">
          <div>
            <h2 id="gallery-heading">IT Portfolio Gallery</h2>
            <p className="section-subtitle">
              A technology-focused showcase of modern interfaces and IT system visuals.
            </p>
          </div>
        </div>

        <div className="gallery-grid" role="list" aria-label="Portfolio images">
          {images.map((image) => (
            <div key={image.id} className="gallery-item" role="listitem">
              <div className="gallery-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                  <a
                    href={image.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-credit"
                  >
                    Image by {image.source}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;