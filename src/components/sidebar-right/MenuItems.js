import React from "react";
import "./MenuItems.css";
import "boxicons";

const MenuItems = (props) => {
  // console.log(props.menuTexts);

  return (
    <>
      <div className="sidebar">
        {props.menuTexts[0].menuFields.map((menufield, index) => {
          return (
            <a href="#" className={index == 1 ? "active" : ""} key={index}>
              {menufield[1]}
              <h3>{menufield[0]}</h3>
            </a>
          );
        })}
        <a href="#" className="logout">
          <i className="bx bx-log-out"></i>
          <h3>خروج</h3>
        </a>
      </div>
    </>
  );
};

export default MenuItems;
