import { render } from '@testing-library/react';
import Spinner from 'react-bootstrap/Spinner';

import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render component', () => {
    render(<LoadingSpinner />);

    expect(Spinner).toBeDefined();
  });
});
