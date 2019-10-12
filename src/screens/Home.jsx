import React from 'react';
import { Header } from '../component/Header';
import { CourseCard } from '../component/CourseCard'

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
            <div className="row justify-content-md-center">
              <CourseCard title="Product Management" subtitle="Next batch open on: 7 day(s)" img_url="card1"/>
              <CourseCard title="Product Design" subtitle="Coming Soon" img_url="card2"/>
              <CourseCard title="UX Design" subtitle="Coming Soon" img_url="card1"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}