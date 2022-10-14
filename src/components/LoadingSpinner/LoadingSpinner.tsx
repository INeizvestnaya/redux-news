import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ThemeContext from '../../context';

const LoadingSpinner = () => {
  const theme = useContext(ThemeContext);

  return (
    <div data-testid="spinner" className="w-100 m-5 text-center">
      <Spinner animation="border" variant={theme.theme.spinner}></Spinner>
    </div>
  );
};

export default LoadingSpinner;
