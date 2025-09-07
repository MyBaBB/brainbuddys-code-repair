import React, { Suspense } from "react";
import FallbackScreen from "./FallbackScreen.jsx"; // Adjust the path as needed
// Lazy load the AnimatedCover component
const LazyAnimatedComponent = React.lazy(() => import("./IDisplayComponent"));

const LazyDiamondComponent = () => {
  return (
    <Suspense fallback={<FallbackScreen />}>
      <LazyAnimatedComponent />
    </Suspense>
  );
};

export default LazyDiamondComponent;
