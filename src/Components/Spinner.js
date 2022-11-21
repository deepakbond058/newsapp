import loading from "./Hourglass.gif";
import React from "react";

const Spinner = () => {
  return (
    <div className="container text-center my-3">
      <img src={loading} alt="loading" />
    </div>
  );
};
export default Spinner;