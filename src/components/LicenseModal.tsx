import React from 'react';

interface LicenseItem {
  id: string;
  source: string;
  url: string;
  details: string;
}

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  licenses: LicenseItem[];
}

const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose, licenses }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="license-modal-heading">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="license-modal-heading">Image License Information</h3>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close license dialog"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>
            These images are used as demo placeholders for an IT-themed portfolio. They are intended for
            prototyping and should be replaced with final, properly licensed visual assets for production.
          </p>
          <ul className="license-list">
            {licenses.map((license) => (
              <li key={license.id}>
                <p>
                  <strong>{license.source}</strong> —{' '}
                  <a href={license.url} target="_blank" rel="noreferrer">
                    {license.url}
                  </a>
                </p>
                <p>{license.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicenseModal;
