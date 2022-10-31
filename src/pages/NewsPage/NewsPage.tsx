import { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import Comment from '@/components/Comment';
import HeaderBar from '@/components/HeaderBar';
import HeaderButton from '@/components/HeaderButton';
import LoadingSpinner from '@/components/LoadingSpinner';
import { PATHS } from '@/constants';
import ThemeContext from '@/context';
import { useTypedSelector } from '@/hooks';
import { loadComments, loadNestedComments } from '@/redux/actions';
import representDate from '@/utils/representDate';

const NewsPage = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const { title, comments, by, url, descendants, time } = useTypedSelector(
    (state) => state.newsPage
  );
  const loading = useTypedSelector((state) => state.loading);

  const intervalId = useRef<number>(0);

  const loadCommentsHandler = () => dispatch(loadComments(location));

  useEffect(() => {
    loadCommentsHandler();

    intervalId.current = window.setInterval(() => {
      loadCommentsHandler();
    }, 60000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const openNestedComments = (comment: number) =>
    dispatch(loadNestedComments(comment));

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <HeaderBar title={title}>
        <HeaderButton extraProps={{ onClick: theme.changeTheme }}>
          Change theme
        </HeaderButton>
        <HeaderButton extraProps={{ onClick: loadCommentsHandler }}>
          Reload
        </HeaderButton>
        <a href={PATHS.MAIN} className="text-decoration-none">
          <HeaderButton>Back</HeaderButton>
        </a>
      </HeaderBar>
      <p
        className={`mx-5 mt-3 fs-3 ${theme.theme.mainText}`}
      >{`"${title}" by ${by}`}</p>
      <div className={`mx-5 mb-2 fs-5 text-end ${theme.theme.mainText}`}>
        {representDate(time)}
      </div>
      <Button
        variant={theme.theme.mainButton}
        className="mx-5 fs-5 border border-secondary"
      >
        <a
          href={url}
          className={`${theme.theme.mainText} text-decoration-none`}
        >
          Open news
        </a>
      </Button>
      <p
        className={`m-3 fs-4 mx-4 ${theme.theme.mainText}`}
      >{`Comments (${descendants}): `}</p>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          {...comment}
          openNestedComments={openNestedComments}
          translate={0}
        />
      ))}
    </>
  );
};

export default NewsPage;
