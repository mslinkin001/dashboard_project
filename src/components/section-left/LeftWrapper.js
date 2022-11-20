import React from "react";
import "./LeftWrapper.css";
const LeftWrapper = (props) => {
  return (
    <>
      <div className="left">{props.children}</div>
    </>
  );
};

export default LeftWrapper;
