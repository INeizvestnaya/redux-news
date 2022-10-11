import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from './context';
import Main from './pages/Main';
import NewsPage from './pages/NewsPage';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <ErrorBoundary>
      <div className={theme.theme.background} style={{ minHeight: '100vh' }}>
        <Switch>
        <Redirect exact from="/" to="/news-redux" />
          <Route path="/news-redux">
            <Main />
          </Route>
          <Route path="/news/:id">
            <NewsPage />
          </Route>
          <Route path="/*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
};

export default App;
