import { useEffect, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context';
import { useTypedSelector } from '../../redux';
import { ActionTypes } from '../../constants';
import LoadingSpinner from '../../components/LoadingSpinner';
import Comment from '../../components/Comment';
import HeaderBar from '../../components/HeaderBar';
import HeaderButton from '../../components/HeaderButton';

const NewsPage = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const { title, comments, by, url, descendants, time } = useTypedSelector(
    (state) => state.newsPage
  );
  const loading = useTypedSelector((state) => state.loading);

  const intervalId = useRef<number>(0);

  const loadComments = () =>
    dispatch({
      type: ActionTypes.LOAD_NEWS_PAGE,
      payload: { newsId: +location.pathname.split('/')[2] }
    });

  useEffect(() => {
    loadComments();

    intervalId.current = window.setInterval(() => {
      loadComments();
    }, 60000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const reloadComments = () => loadComments();

  const changeTheme = () => theme.changeTheme();

  const openNestedComments = (comment: number) =>
    dispatch({
      type: ActionTypes.LOAD_NESTED_COMMENTS,
      payload: { comment }
    });

  return loading === true ? (
    <LoadingSpinner />
  ) : (
    <>
      <HeaderBar title={title}>
        <HeaderButton extraProps={{ onClick: changeTheme }}>
          Change theme
        </HeaderButton>
        <HeaderButton extraProps={{ onClick: reloadComments }}>
          Reload
        </HeaderButton>
        <Link to="/news-redux" style={{ textDecoration: 'none' }}>
          <HeaderButton>Back</HeaderButton>
        </Link>
      </HeaderBar>
      <div
        className={`mx-5 mt-3 fs-3 ${theme.theme.mainText}`}
      >{`"${title}" by ${by}`}</div>
      <div className={`mx-5 mb-2 fs-5 text-end ${theme.theme.mainText}`}>
        {new Date(time * 1000).toDateString()}
      </div>
      <Button
        variant={theme.theme.mainButton}
        className="mx-5 fs-5 border border-secondary"
      >
        <a
          href={url}
          className={theme.theme.mainText}
          style={{ textDecoration: 'none' }}
        >
          Open news
        </a>
      </Button>
      <div
        className={`m-3 fs-4 mx-4 ${theme.theme.mainText}`}
      >{`Comments (${descendants}): `}</div>
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
