import React from 'react';
import { Header } from '../component/Header';
import { DescIcon } from '../component/DescIcon';
import { Footer } from '../container/Footer';
import { MentorCard } from '../component/MentorCard';
import { NumberDesc } from '../component/NumberDesc';
import { CountdownNumber } from '../component/CountdownNumber';

export class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      intervalId: '',
    }
    this.setDate = this.setDate.bind(this)
  }
  componentDidMount = () => {
    document.title = "Product Management Course at Hands-On";
    const intervalId = setInterval(this.setDate(), 1000);
    console.log('component did mount---------');
    console.log(intervalId);
    
    
    this.setState({
      intervalId: intervalId
    })
  }
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }
  dataFromHeader = (myData) => {
    this.setState({
      listDataFromChild: myData
    })
  }
  setDate = () => {
    const testDate = new Date("October 20, 2019 23:55:00").getTime();
    const now = new Date().getTime();
    const distance = testDate - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((distance % (1000 * 60)) / 1000);
    this.setState({
      days: day,
      hours: hour,
      minutes: minute,
      seconds: second,
    })
  }
  render() {
    return (
      <div>
        <Header title="How It Feels Like a Product Manager" subtitle="This program will give you a taste for some of the challenging problems that Product Manager tackles each day!" btn_text="Enroll me right now" btn_url="https://hands-on.typeform.com/to/mA1QIC" section="product" refToScroll={this.dataFromHeader}/>
        <div style={{backgroundColor: 'white'}}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 pb-5">
                <h1 className="bold-title">Why You Should Join this Course</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 pt-2 pt-sm-auto">
                <DescIcon img_url="icon-4" small={true} title="Build Real-Work Experience" subtitle="View real work examples from the experienced Product Manager to learn from."/>
              </div>
              <div className="col-sm-3 pt-2 pt-sm-auto">
                <DescIcon img_url="icon-7" small={true} title="Construct  New Relationships" subtitle="Gain new relation with your mentors and friends from the same interest from this course."/>
              </div>
              <div className="col-sm-3 pt-2 pt-sm-auto">
                <DescIcon img_url="icon-6" small={true} title="Learn Directly from Professionals" subtitle="Take advantage while you are mentored by experienced people."/>
              </div>
              <div className="col-sm-3 pt-2 pt-sm-auto">
                <DescIcon img_url="icon-5" small={true} title="Get Constructive Feedback" subtitle="Experience will be more useful when you also get feedback about your work."/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#F4F4F4"}}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Meet Our Mentor</h1>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-4 pt-3 pt-sm-auto">
                <MentorCard name="Muhammad Alvin Abyan" role="Product Manager at a Unicorn Startup" img_url="alvin" active={true}/>
              </div>
              <div className="col-sm-4 pt-3 pt-sm-auto">
                <MentorCard name="Oddi Muhammad Ikbar" role="Product Manager at Bukalapak" img_url="oddi" active={true}/>
              </div>
              <div className="col-sm-4 pt-3 pt-sm-auto">
                <MentorCard name="Coming Soon" role="Product Manager at Amartha" img_url="valian" active={false}/>
              </div>
            </div>
              
          
          </div>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 pb-5">
                <h3 className="bold-title">What Will You Get Here</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <NumberDesc number="1" title="Define Problem Statement" subtitle="Define the overall problem statement." desc="You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help."/>
              </div>
              <div className="col-sm-6">
                <NumberDesc number="2" title="Analyze Root Cause" subtitle="Create a root cause of the problem." desc="You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help."/>
              </div>
            </div>
            <div className="row pt-auto pt-sm-5">
              <div className="col-sm-6">
                <NumberDesc number="3" title="Propose Your Solution" subtitle="Create solutions that solve the problems." desc="You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help."/>
              </div>
              <div className="col-sm-6">
                <NumberDesc number="4" title="Build User Flow & User Stories" subtitle="Create a user story based on the flow." desc="You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help."/>
              </div>
            </div>
          </div>
          
        </div>
        <div className="countdown-section">
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-6 py-sm-5 py-auto">
                <h1 className="bold-title pt-sm-4 pt-auto">Your Journey Starts Here</h1>
                <button className="btn btn-home-inverse-white mt-2 pr-5 pl-5">Enroll me right now</button>
              </div>
              <div className="col-sm-6 py-sm-5 pt-5">
                <div className="row">
                  <div className="col-12">
                    <h3 className="bold-title">Remaining Time</h3>
                    <CountdownNumber days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}