import React, { lazy, Suspense } from 'react';

const LazyHeroComponent = lazy(() => import('./HeroComponent'));

const HeroComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeroComponent {...props} />
  </Suspense>
);

export default HeroComponent;
