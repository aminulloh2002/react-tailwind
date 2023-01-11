import React, { lazy, Suspense } from 'react';

const LazyNavComponent = lazy(() => import('./NavComponent'));

const NavComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavComponent {...props} />
  </Suspense>
);

export default NavComponent;
