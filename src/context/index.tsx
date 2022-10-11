import React, { ReactNode, useState } from 'react';

interface ContextType {
  theme: {
    name: string;
    mainText: string;
    headerButton: string;
    mainButton: string;
    spinner: string;
    newsBackground: string;
    border: string;
    background: string;
  };
  changeTheme: () => void;
}

interface ContextProps {
  children: ReactNode;
}

const lightTheme = {
  name: 'light',
  mainText: 'text-dark',
  headerButton: 'light',
  mainButton: 'light',
  spinner: 'secondary',
  newsBackground: 'bg-light',
  border: 'border-secondary',
  background: 'bg-white'
};

const darkTheme = {
  name: 'dark',
  mainText: 'text-light',
  headerButton: 'secondary',
  mainButton: 'dark',
  spinner: 'light',
  newsBackground: 'bg-dark',
  border: 'border-secondary',
  background: 'bg-secondary'
};

const ThemeContext = React.createContext<ContextType>({
  theme: lightTheme,
  changeTheme: () => {
    return;
  }
});

export const ThemeContextProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    setTheme((prevState) => {
      if (prevState.name === 'light') {
        return darkTheme;
      } else {
        return lightTheme;
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
