import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Code Examples & Snippets')).toBeInTheDocument();
    expect(screen.getAllByText('Life Timeline')).toHaveLength(2); // nav and h2
    expect(screen.getByText('Fun Facts About Me')).toBeInTheDocument();
  });

  it('has skip link for accessibility', () => {
    render(<App />);

    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('has navigation with correct links', () => {
    render(<App />);

    // Get the main navigation specifically
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(nav).toBeInTheDocument();

    expect(screen.getByRole('menuitem', { name: 'Home' })).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: 'Life Timeline' })
    ).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Code' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'About' })).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: 'Contact' })
    ).toBeInTheDocument();
  });
});
