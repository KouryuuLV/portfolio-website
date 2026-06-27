import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PersonPage from './PersonPage';

describe('PersonPage', () => {
  it('renders shared profile sections from provided data', () => {
    const person = {
      slug: 'juris',
      name: 'Juris',
      title: 'Product Designer',
      summary: 'Builds thoughtful digital experiences.',
      highlights: ['Design systems', 'Storytelling'],
      links: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
      sections: [{ title: 'About', body: 'Juris creates polished product experiences.' }]
    };

    render(<PersonPage person={person} />);

    expect(screen.getByRole('heading', { name: /Juris/i })).toBeInTheDocument();
    expect(screen.getByText(/Product Designer/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://linkedin.com');
  });
});
