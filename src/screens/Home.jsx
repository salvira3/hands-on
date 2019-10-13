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
        <Header title="Get your real work experience here!" subtitle="Build experience and skills with our experienced Mentor and Work Experience Programs." refToScroll={this.dataFromHeader}/>
        <div style={{backgroundColor: "#F4F4F4"}} ref={this.state.listDataFromChild}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Available Hands-On Courses</h1>
              </div>
            </div>
            <div className="row justify-content-md-center" id="course">
              <CourseCard title="Product Management" subtitle={this.state.countdown} img_url="card1" button="http://google.com" path="detail"/>
              <CourseCard title="Product Design" subtitle="Coming Soon" img_url="card2"/>
              <CourseCard title="UX Research" subtitle="Coming Soon" img_url="card3"/>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div className="container pt-5 pb-5 about-section">
            <div className="row">
              <div className="col-md-6 pr-md-5 pr-0 pt-lg-5 pt-0">
                <h1 className="bold-title">Why Hands-On?</h1>
                <p className="subtitle-content">Hands-On is an online leading education platform that will give you a hands-on experience on a project based on a real job position. Hands-On will also mentor you through your project by give you the chance to talk with experts. No more theory, Hands-On will bring you right to the practical things!</p>
              </div>
              <div className="col-md-6 pl-md-5 pl-0 pt-3 pt-md-0">
                <div className="embed-container">
                  <iframe src="https://www.youtube.com/embed/OGZwpPWwAWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}