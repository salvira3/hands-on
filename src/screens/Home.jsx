import React from 'react';
import { Header } from '../component/Header';
import { CourseCard } from '../component/CourseCard'

export class Home extends React.Component {
  constructor(props) {
    super(props);
    
    const testDate = new Date("October 20, 2019 23:55:00").getTime();
    const now = new Date().getTime();
    const distance = testDate - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (distance <= 0) {
      day = "Coming Soon"
    }
    this.state = {
      countdown: `Next batch opens on: ${day} day(s)`,
      listDataFromChild: null,
    }
    
  }
  dataFromHeader = (myData) => {
    this.setState({
      listDataFromChild: myData
    })
  }
  render() {
    // get ref from sibling???
    return (
      <div>
        <Header title="Get your real work experience here!" subtitle="Get a chance to try your dream job position. Lorem ipsum dolor sit amet, consectetur adipisicing elit." refToScroll={this.dataFromHeader}/>
        <div style={{backgroundColor: "#F4F4F4"}} ref={this.state.listDataFromChild}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Available Hands-On Courses</h1>
              </div>
            </div>
            <div className="row justify-content-md-center" id="course">
              <CourseCard title="Product Management" subtitle={this.state.countdown} img_url="card1" button="http://google.com" path="detail"/>
              <CourseCard title="Product Design" subtitle="Coming Soon" img_url="card2"/>
              <CourseCard title="UX Design" subtitle="Coming Soon" img_url="card1"/>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Why Hands-On?</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}