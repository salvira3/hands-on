import React from 'react';
import '../mystyle.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav className="navbar navbar-expand-sm">
        <div className="logo navbar-brand">
          <img src={require('../asset/logo.png')} alt="logo"/>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fas fa-bars" style={{color:'white'}}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggle">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item pr-md-3 pr-auto">
              <NavLink to="/" exact className="nav-link">Courses</NavLink>
            </li>
            <li class="nav-item pr-md-3 pr-auto">
              <NavLink to="/" exact className="nav-link">About</NavLink>
            </li>
            <li class="nav-item pr-md-3 pr-auto">
              <NavLink to="/" exact className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}