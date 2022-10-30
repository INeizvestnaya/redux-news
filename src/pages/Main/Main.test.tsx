import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '@/redux/store';

import Main from './Main';

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
