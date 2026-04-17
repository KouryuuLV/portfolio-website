/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import FunFacts from './FunFacts';

describe('FunFacts', () => {
  it('renders fun facts section', () => {
    render(<FunFacts />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Fun Facts About Me'
    );
    expect(
      screen.getByText('Beyond the code – things that make me, me')
    ).toBeInTheDocument();
  });

  it('renders all fun facts', () => {
    render(<FunFacts />);

    expect(screen.getByText('Coffee Enthusiast')).toBeInTheDocument();
    expect(screen.getByText('Casual Gamer')).toBeInTheDocument();
    expect(screen.getByText('Travel Bug')).toBeInTheDocument();
    expect(screen.getByText('Lifelong Learner')).toBeInTheDocument();
    expect(screen.getByText('Music Lover')).toBeInTheDocument();
    expect(screen.getByText('Innovation Seeker')).toBeInTheDocument();
  });

  it('displays emojis and descriptions', () => {
    render(<FunFacts />);

    expect(screen.getByText('☕')).toBeInTheDocument();
    expect(screen.getByText('🎮')).toBeInTheDocument();
    expect(
      screen.getByText(/fuel my development with espresso/)
    ).toBeInTheDocument();
  });

  it('has proper grid structure', () => {
    render(<FunFacts />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });
});
