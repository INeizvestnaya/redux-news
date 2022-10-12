import { useContext } from 'react';
import ThemeContext from '../../context';
import { Comment as CommentType } from './../../types';

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

  return (
    <>
      <div
        className={`${theme.theme.newsBackground} ${theme.theme.mainText} mx-4 my-2 border border-secondary rounded p-2`}
        style={{ transform: `translate(${translate}px)` }}
        key={id}
        onClick={() => openNestedComments(id)}
        data-testid="comment"
      >
        <div>
          <strong>{by}</strong>: {text}
        </div>
        <div className="text-end mt-1">
          {new Date(time * 1000).toDateString()}
        </div>
      </div>
      {nestedComments !== undefined &&
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
