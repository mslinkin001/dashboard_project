import React from "react";
import "./RecentSection.css";
import profilePic2 from "../../assets/img/profile-2.jpg";
import profilePic3 from "../../assets/img/profile-3.jpg";
import profilePic4 from "../../assets/img/profile-4.jpg";

const RecentSection = (props) => {
  return (
    <>
      <div className="recent-updates">
        <h2>آخرین پیام ها</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic2} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> recieved his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic3} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> recieved his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic4} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> recieved his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentSection;
