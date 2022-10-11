import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      isError: false
    };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    return this.state.isError ? (
      <div className="text-center fs-2 m-4">Error! Reload the page</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
