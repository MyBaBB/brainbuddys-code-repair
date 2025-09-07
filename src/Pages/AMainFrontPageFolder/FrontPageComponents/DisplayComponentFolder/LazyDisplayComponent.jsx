import React, { Suspense } from "react";

// Lazy load the AnimatedCover component
const LazyAnimatedComponent = React.lazy(() => import("./IDisplayComponent"));

const LazyDiamondComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyAnimatedComponent />
    </Suspense>
  );
};

export default LazyDiamondComponent;
