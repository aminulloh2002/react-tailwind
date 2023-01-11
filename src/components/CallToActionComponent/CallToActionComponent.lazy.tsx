import React, { lazy, Suspense } from 'react';

const LazyCallToActionComponent = lazy(() => import('./CallToActionComponent'));

const CallToActionComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCallToActionComponent {...props} />
  </Suspense>
);

export default CallToActionComponent;
