import { useCallback, useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import HeaderBar from '@/components/HeaderBar';
import HeaderButton from '@/components/HeaderButton';
import LoadingSpinner from '@/components/LoadingSpinner';
import NewsList from '@/components/NewsList';
import ThemeContext from '@/context';
import { useTypedSelector } from '@/hooks';
import { NewsType } from '@/interfaces';
import { loadNews } from '@/redux/actions';

const Main = () => {
  const dispatch = useDispatch();

  const news = useTypedSelector((state) => state.newsData);
  const loading = useTypedSelector((state) => state.loading);

  const intervalId = useRef<number>(0);

  const loadNewsHandler = useCallback(() => dispatch(loadNews()), []);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    loadNewsHandler();

    intervalId.current = window.setInterval(() => {
      loadNewsHandler();
    }, 60000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [loadNewsHandler]);

  return (
    <>
      <HeaderBar title="Hacker news">
        <HeaderButton extraProps={{ onClick: theme.changeTheme }}>
          Change theme
        </HeaderButton>
        <HeaderButton extraProps={{ onClick: loadNewsHandler }}>
          Reload
        </HeaderButton>
      </HeaderBar>
      {loading ? (
        <LoadingSpinner />
      ) : (
        news
          .sort((a, b) => b.time - a.time)
          .map((news: NewsType) => <NewsList {...news} key={news.id} />)
      )}
    </>
  );
};

export default Main;
