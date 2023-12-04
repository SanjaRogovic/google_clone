import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="lightblue"
        strokeWidth="5"
        animationDuration="0.75"
        width="175"
        visible={true}
      />
    </div>
  );
};

export default Loader;