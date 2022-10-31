import { render, screen } from '@testing-library/react';

import { ThemeContextProvider } from '@/context';
import representDate from '@/utils/representDate';

import NewsList from './NewsList';

const defaultProps = {
  title: 'News item',
  score: 10,
  by: 'Author',
  time: 1665514748,
  id: 1,
  url: '',
  kids: [1, 2],
  descendants: 2
};

describe.only('NewsList', () => {
  it('should render component with correct props', () => {
    render(
      <ThemeContextProvider>
        <NewsList {...defaultProps} />
      </ThemeContextProvider>
    );

    const title = screen.getByText(new RegExp(defaultProps.title));
    expect(title).toBeDefined();

    const author = screen.getByText(new RegExp(defaultProps.by));
    expect(author).toBeDefined();

    const rating = screen.getByText(
      new RegExp(`Rating: ${defaultProps.score}`)
    );
    expect(rating).toBeDefined();

    const stringDate = representDate(defaultProps.time);
    const time = screen.getByText(new RegExp(stringDate));
    expect(time).toBeDefined();
  });
});
