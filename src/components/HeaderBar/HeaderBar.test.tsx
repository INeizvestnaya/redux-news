import { render, screen } from '@testing-library/react';

import HeaderBar from './HeaderBar';

const defaultProps = {
  title: 'Header'
};

describe('Header bar', () => {
  it('should render component with correct props', () => {
    render(
      <HeaderBar {...defaultProps}>
        <div>children</div>
      </HeaderBar>
    );

    const title = screen.getByText(new RegExp(defaultProps.title));
    expect(title).toBeDefined();

    const children = screen.getByText(/children/);
    expect(children).toBeDefined();
  });
});
