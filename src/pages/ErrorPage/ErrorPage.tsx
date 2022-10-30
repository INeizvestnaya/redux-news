import { useContext } from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from '@/components/HeaderBar';
import HeaderButton from '@/components/HeaderButton';
import { PATHS } from '@/constants';
import ThemeContext from '@/context';

const ErrorPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <HeaderBar title="">
        <Link to={PATHS.MAIN} className="text-decoration-none">
          <HeaderButton extraProps={{ className: theme.theme.mainText }}>
            Main page
          </HeaderButton>
        </Link>
      </HeaderBar>
      <p className={`text-center fs-2 m-4 ${theme.theme.mainText}`}>
        This page doesn't exist
      </p>
    </>
  );
};

export default ErrorPage;
