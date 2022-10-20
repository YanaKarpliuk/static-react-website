import React from "react";
import telegram from "../images/telegram.png";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

export default function FactsPage() {
  return (
    <div className="main-content">
      <h2>Hi there!</h2>
      <p>My name is Yana and I'm a future frontend developer🔥</p>
      <p>
        I've already learned HTML, CSS, JavaScript. And this website is my first
        project created with React.
      </p>
      <p>You can find more info about me here:</p>
      <ul className="sm-list">
        <li>
          <a target="_blank" href="https://t.me/yana_karpliuk">
            <img className="sm-icon" src={telegram}></img>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yana-karpliuk-3820a8208/"
          >
            <img className="sm-icon" src={linkedin}></img>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/YanaKarpliuk">
            <img className="sm-icon" src={github}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
