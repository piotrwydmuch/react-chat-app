import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      
      <video autoPlay muted loop id="myVideo" src="https://static.videezy.com/system/resources/previews/000/037/830/original/LC015.mp4">
      </video>
      <div className="joinInnerContainer">
        <h1 className="heading">Join chat</h1>
        <h2 className="heading-h2">Choose your name and room</h2>
        <div>
          <input
            type="text"
            placeholder="Your nickname"
            className="joinInput"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Name of room"
            className="joinInput mt-20"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
        <div className="joinFooter">
          <ul>
            <li><a href="https://github.com/piotrwydmuch">github</a></li>
            <li><a href="https://www.linkedin.com/in/piotr-wydmuch/">linkedin</a></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Join;
