import { render, screen, fireEvent } from '@testing-library/react';
import CodeExamples from './CodeExamples';

describe('CodeExamples', () => {
  it('renders code examples section', () => {
    render(<CodeExamples />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Code Examples & Snippets'
    );
  });

  it('renders tab buttons for each example', () => {
    render(<CodeExamples />);

    expect(
      screen.getByRole('tab', { name: /custom react hook/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: /api data fetching/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: /type-safe form handling/i })
    ).toBeInTheDocument();
  });

  it('shows first example by default', () => {
    render(<CodeExamples />);

    expect(
      screen.getByText(/reusable hook for syncing state/)
    ).toBeInTheDocument();
  });

  it('switches content when clicking different tabs', () => {
    render(<CodeExamples />);

    const apiTab = screen.getByRole('tab', { name: /api data fetching/i });
    fireEvent.click(apiTab);

    expect(screen.getByText(/production-ready pattern/)).toBeInTheDocument();
    expect(
      screen.getByText('Tags: TypeScript, API, Error Handling, Async/Await')
    ).toBeInTheDocument();
  });

  it('displays tags and project info', () => {
    render(<CodeExamples />);

    expect(
      screen.getByText('Tags: React, TypeScript, Hooks, Browser API')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Project Size: Small | Intensity: Medium')
    ).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<CodeExamples />);

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeInTheDocument();
  });
});
