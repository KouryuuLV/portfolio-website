import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // EmailJS configuration from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS send function
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Portfolio Owner', // Replace with your name
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Get In Touch</h2>
        <p className="section-subtitle">
          I'd love to hear from you. Send me a message or connect with me on
          social media.
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name{' '}
                  <span className="required" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="error-message" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email{' '}
                  <span className="required" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <span id="email-error" className="error-message" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject{' '}
                  <span className="required" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  aria-describedby={
                    errors.subject ? 'subject-error' : undefined
                  }
                  aria-invalid={!!errors.subject}
                  required
                />
                {errors.subject && (
                  <span
                    id="subject-error"
                    className="error-message"
                    role="alert"
                  >
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message{' '}
                  <span className="required" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows={5}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && (
                  <span
                    id="message-error"
                    className="error-message"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
                aria-describedby="submit-status"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <div
                id="submit-status"
                className="submit-status"
                aria-live="polite"
                aria-atomic="true"
              >
                {submitStatus === 'success' && (
                  <div className="success-message" role="alert">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message" role="alert">
                    ❌ Failed to send message. Please try again or contact me
                    directly.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Links */}
          <div className="contact-links">
            <h3>Connect With Me</h3>
            <div className="contact-grid" role="list">
              <div className="contact-card" role="listitem">
                <div className="contact-icon" aria-hidden="true">
                  💼
                </div>
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile (opens in new tab)"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>

              <div className="contact-card" role="listitem">
                <div className="contact-icon" aria-hidden="true">
                  🐙
                </div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile (opens in new tab)"
                >
                  github.com/yourprofile
                </a>
              </div>

              <div className="contact-card" role="listitem">
                <div className="contact-icon" aria-hidden="true">
                  🔗
                </div>
                <h4>Twitter</h4>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my Twitter profile (opens in new tab)"
                >
                  @yourhandle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
