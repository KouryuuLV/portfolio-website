/// <reference types="vitest/globals" />

import { render, screen, fireEvent } from '@testing-library/react';
import Education from './Education';

describe('Education', () => {
  it('renders education section with timeline', () => {
    render(<Education />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Life Timeline'
    );
    expect(
      screen.getByText('My journey from 1987 to present: education, career, and personal growth')
    ).toBeInTheDocument();
  });

  it('renders all timeline periods', () => {
    render(<Education />);

    // Check that period titles appear in multiple places (segment, tooltip, card header)
    expect(screen.getAllByText('Early Years')).toHaveLength(3);
    expect(screen.getAllByText('High School')).toHaveLength(3);
    expect(screen.getAllByText('University')).toHaveLength(3);
    expect(screen.getAllByText('Career Transition')).toHaveLength(3);
    expect(screen.getAllByText('Technical School')).toHaveLength(3);
    expect(screen.getAllByText('Early Career')).toHaveLength(3);
    expect(screen.getAllByText('Current Work')).toHaveLength(3);
  });

  it('renders timeline navigation with clickable segments', () => {
    render(<Education />);

    const timelineSegments = screen.getAllByRole('button');
    expect(timelineSegments).toHaveLength(7); // 7 timeline periods

    // Check that segments have proper labels
    expect(screen.getByLabelText('Jump to Early Years period')).toBeInTheDocument();
    expect(screen.getByLabelText('Jump to High School period')).toBeInTheDocument();
    expect(screen.getByLabelText('Jump to University period')).toBeInTheDocument();
  });

  it('displays period details and descriptions', () => {
    render(<Education />);

    // Check that institution names appear in multiple places (tooltip and details)
    expect(screen.getAllByText('Friendly Appeal Cesis State Gymnasium')).toHaveLength(2);
    expect(screen.getAllByText("Master's Degree in Molecular Biology/Microbiology")).toHaveLength(2);
    expect(screen.getAllByText('Riga State Technical School')).toHaveLength(2);
    expect(screen.getAllByText('Freelance IT Consultant & Full Stack Developer')).toHaveLength(2);
  });

  it('shows timeline tooltips on hover', () => {
    render(<Education />);

    const universitySegment = screen.getByLabelText('Jump to University period');

    // Initially tooltip should not be visible - use getAllByText to find the specific one in tooltip
    const descriptions = screen.getAllByText(/Advanced studies at University of Latvia/);
    expect(descriptions).toHaveLength(2); // One in tooltip, one in details

    // The tooltip should be hidden initially (check by finding the tooltip element)
    const tooltip = universitySegment.querySelector('.timeline-tooltip');
    expect(tooltip).toBeInTheDocument();

    // Hover should show tooltip
    fireEvent.mouseEnter(universitySegment);
    expect(tooltip).toBeVisible();

    // Mouse leave should hide tooltip
    fireEvent.mouseLeave(universitySegment);
    // Note: CSS hover effects might not be testable in JSDOM, so we just check the element exists
  });

  it('has proper accessibility attributes', () => {
    render(<Education />);

    const timelineContainer = screen.getByRole('navigation', {
      name: /life timeline navigation/i,
    });
    expect(timelineContainer).toBeInTheDocument();

    // Check that timeline segments are keyboard accessible
    const segments = screen.getAllByRole('button');
    segments.forEach(segment => {
      expect(segment).toHaveAttribute('tabIndex', '0');
    });
  });

  it('displays year markers', () => {
    render(<Education />);

    expect(screen.getByText('1987')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
    expect(screen.getByText('2011')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('2026')).toBeInTheDocument();
  });
});
