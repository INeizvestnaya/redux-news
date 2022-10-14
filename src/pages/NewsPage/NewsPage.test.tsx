import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import NewsPage from './NewsPage';
import store from './../../redux';

describe('NewsPage', () => {
  it('should render component with correct ui', () => {
    render(
      <Provider store={store}>
        <NewsPage />
      </Provider>
    );

    screen.debug();
  });
});
