import React from 'react';
import { Header } from '../component/Header';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header title="Get your real work experience here!" subtitle="Get a chance to try your dream job position. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        <div style={{backgroundColor: "#F4F4F4"}}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Available Hands-On Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}