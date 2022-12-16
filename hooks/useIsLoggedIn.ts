import { useEffect, useState } from 'react';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token: string = localStorage.getItem('token') || '';
    if (token.length > 0) {
      setIsLoggedIn(true);
    }
  }, []);

  const setLoginToken = (value: string) => {
    localStorage.setItem('token', value);
    setIsLoggedIn(true);
  };

  const removeLoginToken = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, setLoginToken, removeLoginToken };
};

export default useIsLoggedIn;
