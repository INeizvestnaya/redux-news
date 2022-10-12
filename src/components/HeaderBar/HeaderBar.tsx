import { ReactNode } from 'react';
import Navbar from 'react-bootstrap/Navbar';

interface HeaderBarProps {
  title: string;
  children: ReactNode;
}

const HeaderBar = ({ title, children }: HeaderBarProps) => {
  return (
    <Navbar variant="dark" bg="dark" className="text-light">
      <div className="d-flex justify-content-between px-4 py-1 text-light w-100">
        <Navbar.Brand>{title}</Navbar.Brand>
        <div>{children}</div>
      </div>
    </Navbar>
  );
};

export default HeaderBar;
