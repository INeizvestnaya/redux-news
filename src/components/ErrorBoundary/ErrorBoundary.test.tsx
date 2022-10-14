import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render component without error', () => {
    render(
      <ErrorBoundary>
        <div>Components</div>
      </ErrorBoundary>
    );

    const output = screen.getByText(/Components/);
    expect(output).toBeDefined();
  });

  it('should render error fallback for error', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const output = screen.getByText(/Error! Reload the page/);
    expect(output).toBeDefined();
  });
});
