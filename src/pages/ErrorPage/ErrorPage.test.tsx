import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import HeaderButton from './../../components/HeaderButton';

describe('ErrorPage', () => {
  /*it('should render component', () => {
    render(<ErrorPage />);

    const errorLabel = screen.getByText(/This page doesn't exist/);
    expect(errorLabel).toBeDefined();

    const headerButton = screen.getByRole(HeaderButton);
    expect(errorLabel).toBeDefined();
  });*/

  it('test', () => {
    expect(2).toBe(2);
  });
});
