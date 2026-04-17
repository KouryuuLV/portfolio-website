import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders hero section with correct heading', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Welcome to My Portfolio'
    );
  });

  it('renders subtitle and description', () => {
    render(<Hero />);

    expect(
      screen.getByText('Full Stack Developer | Cloud, DevOps & Web Systems')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Building secure, scalable IT experiences/)
    ).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);

    const getInTouchButton = screen.getByRole('link', {
      name: /get in touch/i,
    });
    const seeWorkButton = screen.getByRole('link', { name: /see my work/i });

    expect(getInTouchButton).toBeInTheDocument();
    expect(seeWorkButton).toBeInTheDocument();
    expect(getInTouchButton).toHaveAttribute('href', '#contact');
    expect(seeWorkButton).toHaveAttribute('href', '#code-examples');
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: /welcome to my portfolio/i,
    });
    expect(section).toBeInTheDocument();
  });
});
