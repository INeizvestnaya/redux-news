import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import ThemeContext from '../../context';

interface HeaderButtonProps {
  children: string;
  extraProps?: object;
}

const HeaderButton = ({ children, extraProps = {} }: HeaderButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Button variant={theme.theme.headerButton} className="me-3" {...extraProps}>
      {children}
    </Button>
  );
};

export default HeaderButton;
