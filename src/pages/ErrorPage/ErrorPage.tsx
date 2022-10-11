import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context';
import HeaderBar from '../../components/HeaderBar';
import HeaderButton from '../../components/HeaderButton';

const ErrorPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <HeaderBar title="">
        <Link to="/news-redux" style={{ textDecoration: 'none' }}>
          <HeaderButton extraProps={{ className: theme.theme.mainText }}>
            Main page
          </HeaderButton>
        </Link>
      </HeaderBar>
      <div className={`text-center fs-2 m-4 ${theme.theme.mainText}`}>
        This page doesn't exist
      </div>
    </>
  );
};

export default ErrorPage;
