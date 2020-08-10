import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online Icon" />
        <h3>{room}</h3>
      </div>
      <a className="inviteFriend" target="_blank" href={`/chat?name=InvitedFriend&room=${room}`}>invite friend</a>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
