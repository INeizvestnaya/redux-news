import { useContext } from 'react';

import ThemeContext from '@/context';
import { Comment as CommentType } from '@/interfaces';
import representDate from '@/utils/representDate';

interface CommentProps {
  id: number;
  text: string;
  by: string;
  time: number;
  nestedComments: CommentType[];
  openNestedComments: (id: number) => void;
  translate: number;
}

const Comment = ({
  id,
  text,
  by,
  time,
  nestedComments,
  openNestedComments,
  translate
}: CommentProps) => {
  const theme = useContext(ThemeContext);

  const handleCommentClick = () => {
    openNestedComments(id);
  };

  return (
    <>
      <div
        className={`${theme.theme.newsBackground} ${theme.theme.mainText} mx-4 my-2 border border-secondary rounded p-2`}
        style={{ transform: `translate(${translate}px)` }}
        key={id}
        onClick={handleCommentClick}
        data-testid="comment"
      >
        <span>
          <strong>{by}</strong>: {text}
        </span>
        <div className="text-end mt-1">{representDate(time)}</div>
      </div>
      {nestedComments &&
        nestedComments.map((nested) => (
          <Comment
            key={nested.id}
            {...nested}
            openNestedComments={openNestedComments}
            translate={translate + 30}
          />
        ))}
    </>
  );
};

export default Comment;
