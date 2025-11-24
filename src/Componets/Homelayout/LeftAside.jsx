import React, { Suspense } from "react";
import AllCategories from "../AllCategories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <>
          <span className="loading loading-spinner loading-xl"></span>
          </>
        }
      >
        <AllCategories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
