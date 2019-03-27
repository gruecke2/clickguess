import React, { Component } from "react";
import "./style.css";

class HeadNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <button className="nav-link active" href="#">
                Reset
              </button>
            </li>
            <li className="nav-item">
              <h1>Click Game!</h1>
            </li>
            <li className="nav-item">Score: <span>{this.props.score}</span></li>
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
}

export default HeadNav;
