import React from 'react';
import '../mystyle.css';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="footer pb-5 pt-5">
        <div className="container">
          <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-2">
                <img src={require(`../asset/icon.jpg`)} alt=""/>
              </div>
              <div className="col-10 pl-5 pl-lg-1">
                <h4 className="bold-title pt-lg-3">HANDS-ON</h4>
                <p className="subtitle-role">Copyright © 2019 Hands-On Career Accelerator.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-3">
            <div className="row">
              <div className="col-6">
                <Link to="/detail">Help</Link>
              </div>
              <div className="col-6">
                <Link to="/detail">Terms</Link>
              </div>
              
            </div>
            <div className="row">
              <div className="col-6">
                <Link to="/detail">Privacy</Link>
              </div>
              <div className="col-6">
                <Link to="/detail">About Hands-On</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}