import React, { lazy, Suspense } from 'react';

const LazyFooterComponent = lazy(() => import('./FooterComponent'));

const FooterComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterComponent {...props} />
  </Suspense>
);

export default FooterComponent;
