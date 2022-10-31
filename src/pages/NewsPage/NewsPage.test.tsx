import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '@/redux/store';

import NewsPage from './NewsPage';

describe('NewsPage', () => {
  it('should render component with correct ui', () => {
    render(
      <Provider store={store}>
        <NewsPage />
      </Provider>
    );

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeDefined();
  });
});
