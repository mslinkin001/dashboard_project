import React from "react";
import "./LeftTopSection.css";
import profilePic from "../../assets/img/profile-1.jpg";

const LeftTopSection = (props) => {
  return (
    <>
      <div className="top">
        <button id="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="theme-toggler">
          <i className="fa-solid fa-sun active"></i>
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Daniel</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={profilePic} alt="profile photo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftTopSection;
