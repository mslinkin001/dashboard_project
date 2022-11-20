import React from "react";
import "./MiddleWrapper.css";
const MiddleWrapper = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default MiddleWrapper;
