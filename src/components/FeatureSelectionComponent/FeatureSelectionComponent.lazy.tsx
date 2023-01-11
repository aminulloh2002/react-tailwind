import React, { lazy, Suspense } from 'react';

const LazyFeatureSelectionComponent = lazy(() => import('./FeatureSelectionComponent'));

const FeatureSelectionComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatureSelectionComponent {...props} />
  </Suspense>
);

export default FeatureSelectionComponent;
