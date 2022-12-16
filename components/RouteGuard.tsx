import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useIsLoggedIn } from '@hooks';

function RouteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { isLoggedIn } = useIsLoggedIn();

  useEffect(() => {
    authCheck(router.asPath);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [isLoggedIn]);

  function authCheck(url: string) {
    const path = url.split('?')[0];
    if (!isLoggedIn && path !== '/login') {
      router.replace({
        pathname: '/login',
      });
      return;
    }
    if (isLoggedIn && path !== '/home') {
      router.replace({
        pathname: '/home',
      });
      return;
    }
  }

  return children;
}

export default RouteGuard;
