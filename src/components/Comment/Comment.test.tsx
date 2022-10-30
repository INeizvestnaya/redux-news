import { fireEvent,render, screen } from '@testing-library/react';

import representDate from '@/utils/representDate';

import Comment from './Comment';

type HeaderBarProps = React.ComponentProps<typeof Comment>;

function renderComponent(props: HeaderBarProps) {
  return render(<Comment {...props} />);
}

const defaultProps = {
  id: 1,
  text: 'Comment text',
  by: 'Author',
  time: 1665514748,
  openNestedComments: jest.fn(),
  nestedComments: [],
  translate: 0
};

const nestedComments = [
  {
    id: 2,
    text: '2',
    by: '2',
    time: 1665514748,
    nestedComments: [],
    openNestedComments: jest.fn(),
    translate: 0,
    kids: [1, 2]
  },
  {
    id: 3,
    text: '3',
    by: '3',
    time: 1665514748,
    nestedComments: [],
    openNestedComments: jest.fn(),
    translate: 0,
    kids: [1, 2]
  }
];

describe('Comment', () => {
  it('should render component with correct props', () => {
    renderComponent(defaultProps);

    const text = screen.findByText(new RegExp(defaultProps.text));
    expect(text).toBeDefined();

    const author = screen.findByText(new RegExp(defaultProps.by));
    expect(author).toBeDefined();

    const stringDate = representDate(defaultProps.time);
    const time = screen.findByText(new RegExp(stringDate));
    expect(time).toBeDefined();
  });

  it('should call openNestedComments prop', () => {
    renderComponent(defaultProps);

    const comment = screen.getByTestId('comment');
    fireEvent.click(comment);
    expect(defaultProps.openNestedComments).toHaveBeenCalled();
  });

  it('should render nested comments', async () => {
    render(<Comment {...defaultProps} nestedComments={nestedComments} />);

    const comments = await screen.findAllByTestId('comment');
    expect(comments).toHaveLength(3);
  });
});
