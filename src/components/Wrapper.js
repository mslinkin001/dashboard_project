import React from "react";
import "./Wrapper.css";
import "./root.css";
const Wrapper = (props) => {
  return (
    <>
      <div className="container">{props.children}</div>
    </>
  );
};

export default Wrapper;
