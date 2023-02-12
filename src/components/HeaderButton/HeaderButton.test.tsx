import { fireEvent,render, screen } from '@testing-library/react';
import React from 'react';

import HeaderButton from './HeaderButton';

type HeaderBarProps = React.ComponentProps<typeof HeaderButton>;

function renderComponent(props: HeaderBarProps) {
  return render(<HeaderButton {...props} />);
}

const buttonExtraProps = {
  extraProps: { onClick: jest.fn() },
  children: 'Button'
};

describe('HeaderButton', () => {
  it('should render component with correct props', () => {
    renderComponent({ children: 'Button' });

    const button = screen.getByText(/Button/);
    expect(button).toBeDefined();
  });

  it('should correctly pass extra props to the button', () => {
    renderComponent(buttonExtraProps);

    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect(buttonExtraProps.extraProps.onClick).toHaveBeenCalled();
  });
});
