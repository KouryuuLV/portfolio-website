import React from 'react';
import profileData from '../../data/profile.json';

const Gallery: React.FC = () => {
  const images = profileData.gallery.items;

  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery-intro">
          <div>
            <h2 id="gallery-heading">{profileData.gallery.heading}</h2>
            <p className="section-subtitle">{profileData.gallery.subtitle}</p>
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