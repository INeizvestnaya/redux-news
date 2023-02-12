import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext } from 'react';
import { Redirect,Route, Switch } from 'react-router-dom';

import { PATHS } from './constants';
import ThemeContext from './context';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';
import NewsPage from './pages/NewsPage';

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme.theme.background} fullHeight`}>
      <Switch>
        <Redirect exact from={PATHS.INITIAL} to={PATHS.MAIN} />
        <Route path={PATHS.MAIN} component={Main} />
        <Route path={PATHS.NEWS} component={NewsPage} />
        <Route path={PATHS.OTHER} component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
