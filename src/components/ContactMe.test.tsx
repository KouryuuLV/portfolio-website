/// <reference types="vitest/globals" />

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ContactMe from './ContactMe';

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

import emailjs from '@emailjs/browser';

const mockSend = vi.mocked(emailjs.send);

describe('ContactMe', () => {
  beforeEach(() => {
    mockSend.mockClear();
    // Mock environment variables
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'test-service');
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'test-template');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'test-key');
  });

  it('renders contact form', () => {
    render(<ContactMe />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Get In Touch'
    );
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty form submission', async () => {
    const user = userEvent.setup();
    render(<ContactMe />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Subject is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactMe />);

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(
      screen.getByText('Please enter a valid email address')
    ).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    const user = userEvent.setup();
    mockSend.mockResolvedValueOnce({ status: 200, text: 'OK' });

    render(<ContactMe />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/)).toBeInTheDocument();
    });

    expect(mockSend).toHaveBeenCalledWith(
      'test-service',
      'test-template',
      expect.objectContaining({
        from_name: 'John Doe',
        from_email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message',
      }),
      'test-key'
    );
  });

  it('handles submission error', async () => {
    const user = userEvent.setup();
    mockSend.mockRejectedValueOnce(new Error('Send failed'));

    render(<ContactMe />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/)).toBeInTheDocument();
    });
  });

  it('renders social media links', () => {
    render(<ContactMe />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});
