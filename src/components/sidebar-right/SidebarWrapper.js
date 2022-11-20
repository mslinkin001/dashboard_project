import React from "react";
import "./SidebarWrapper.css";
const SidebarWrapper = (props) => {
  return (
    <>
      <aside>{props.children}</aside>
    </>
  );
};

export default SidebarWrapper;
