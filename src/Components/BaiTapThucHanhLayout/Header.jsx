import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
