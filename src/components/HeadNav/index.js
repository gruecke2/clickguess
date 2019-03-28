import React from "react";
import "./style.css";

function HeadNav(props) {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <button className="nav-link resetBtn" onClick={props.reset}>
                Reset
              </button>
            </li>
            <li className="nav-item">
              <h1 id="main-head">Click Game!</h1>
            </li>
            <li className="nav-item">Score: <span>{props.score}{(props.score===12?" You win!":"")}</span></li>
          </ul>
        </nav>
        <header className="header">
        <div className="bg">
        <h1>Clicky Game!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </div>  
        </header>
      </div>
    );
}

export default HeadNav;
