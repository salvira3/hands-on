import React from 'react';
import { Header } from '../component/Header';
import { DescIcon } from '../component/DescIcon';
import { Footer } from '../container/Footer';
import { MentorCard } from '../component/MentorCard';

export class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
    }
  }
  componentDidMount = () => {
    document.title = "Product Management Course at Hands-On"
  }
  dataFromHeader = (myData) => {
    this.setState({
      listDataFromChild: myData
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
              <div className="col-sm-3">
                <DescIcon img_url="icon-4" small={true} title="Build Real-Work Experience" subtitle="View real work examples from the experienced Product Manager to learn from."/>
              </div>
              <div className="col-sm-3">
                <DescIcon img_url="icon-7" small={true} title="Construct  New Relationships" subtitle="Gain new relation with your mentors and friends from the same interest from this course."/>
              </div>
              <div className="col-sm-3">
                <DescIcon img_url="icon-6" small={true} title="Learn Directly from Professionals" subtitle="Take advantage while you are mentored by experienced people."/>
              </div>
              <div className="col-sm-3">
                <DescIcon img_url="icon-5" small={true} title="Get Constructive Feedback" subtitle="Experience will be more useful when you also get feedback about your work."/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#F4F4F4"}}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 pb-5">
                <h1 className="bold-title">Meet Our Mentor</h1>
                <div className="row pt-5">
                  <div className="col-sm-4">
                    <MentorCard name="Muhammad Alvin Abyan" role="Product Manager at a Unicorn Startup" img_url="alvin" active={true}/>
                  </div>
                  <div className="col-sm-4">
                    <MentorCard name="Oddi Muhammad Ikbar" role="Product Manager at Bukalapak" img_url="oddi" active={true}/>
                  </div>
                  <div className="col-sm-4">
                    <MentorCard name="Coming Soon" role="Product Manager at Amartha" img_url="valian" active={false}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}