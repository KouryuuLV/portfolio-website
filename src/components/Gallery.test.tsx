/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('renders gallery section', () => {
    render(<Gallery />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('IT Portfolio Gallery');
    expect(screen.getByText('A technology-focused showcase of modern interfaces and IT system visuals.')).toBeInTheDocument();
  });

  it('renders all gallery images', () => {
    render(<Gallery />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(6);

    expect(screen.getByAltText('IT dashboard with data visualizations')).toBeInTheDocument();
    expect(screen.getByAltText('Code editor with working session open')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud architecture diagram on a screen')).toBeInTheDocument();
    expect(screen.getByAltText('Cybersecurity monitoring and alert screens')).toBeInTheDocument();
    expect(screen.getByAltText('Server rack and network equipment')).toBeInTheDocument();
    expect(screen.getByAltText('DevOps workflow with automation tools')).toBeInTheDocument();
  });

  it('renders gallery titles and descriptions', () => {
    render(<Gallery />);

    expect(screen.getByText('IT Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Developer Workspace')).toBeInTheDocument();
    expect(screen.getByText('Cloud Systems')).toBeInTheDocument();
    expect(screen.getByText('Security Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('DevOps Workflow')).toBeInTheDocument();

    expect(screen.getByText(/Visual metrics and infrastructure analytics/)).toBeInTheDocument();
    expect(screen.getByText(/Scalable cloud architecture/)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Gallery />);

    const list = screen.getByRole('list', { name: /portfolio images/i });
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('images have lazy loading', () => {
    render(<Gallery />);

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders per-image license credit links', () => {
    render(<Gallery />);

    const creditLinks = screen.getAllByRole('link', { name: /image by picsum photos/i });
    expect(creditLinks).toHaveLength(6);
    creditLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://picsum.photos');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});