import { useEffect, useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import ThemeContext from '../../context';
import { useTypedSelector } from '../../redux';
import { NewsType } from '../../types';
import { ActionTypes } from '../../constants';
import NewsList from '../../components/NewsList';
import LoadingSpinner from '../../components/LoadingSpinner';
import HeaderBar from '../../components/HeaderBar';
import HeaderButton from '../../components/HeaderButton';

const Main = () => {
  const dispatch = useDispatch();

  const news = useTypedSelector((state) => state.newsData);
  const loading = useTypedSelector((state) => state.loading);

  const intervalId = useRef<number>(0);

  const loadNews = () => dispatch({ type: ActionTypes.LOAD_NEWS });

  const theme = useContext(ThemeContext);

  useEffect(() => {
    loadNews();

    intervalId.current = window.setInterval(() => {
      loadNews();
    }, 60000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const reloadNews = () => loadNews();

  const changeTheme = () => theme.changeTheme();

  return (
    <>
      <HeaderBar title="Hacker news">
        <HeaderButton extraProps={{ onClick: changeTheme }}>
          Change theme
        </HeaderButton>
        <HeaderButton extraProps={{ onClick: reloadNews }}>Reload</HeaderButton>
      </HeaderBar>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
        news
          .sort((a, b) => b.time - a.time)
          .map((news: NewsType) => <NewsList {...news} key={Math.random()} />)
      )}
    </>
  );
};

export default Main;
