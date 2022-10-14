import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import store from './../../redux';

describe('Main', () => {
  it('should render component with correct ui', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const changeTheme = screen.getByText(/Change theme/);
    expect(changeTheme).toBeDefined();

    const reload = screen.getByText(/Reload/);
    expect(reload).toBeDefined();
  });
});
