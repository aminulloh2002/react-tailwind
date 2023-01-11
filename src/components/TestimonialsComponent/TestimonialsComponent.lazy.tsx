import React, { lazy, Suspense } from 'react';

const LazyTestimonialsComponent = lazy(() => import('./TestimonialsComponent'));

const TestimonialsComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTestimonialsComponent {...props} />
  </Suspense>
);

export default TestimonialsComponent;
