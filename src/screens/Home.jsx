import React from 'react';
import { Header } from '../component/Header';
import { CourseCard } from '../component/CourseCard';
import { DescIcon } from '../component/DescIcon';
import { TestimoniCard } from '../component/TestimoniCard';
import { RegisterCard } from '../component/RegisterCard';
import { Footer } from '../container/Footer';
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: '',
      listDataFromChild: null,
      status: 'inactive',
    }
    this.routeToDetail = this.routeToDetail.bind(this)
  }
  componentDidMount = () => {
    this.setDate();
    document.title = "Learn at Hands-On"
  }
  dataFromHeader = (myData) => {
    this.setState({
      listDataFromChild: myData
    })
  }
  setDate = () => {
    const testDate = new Date("October 26, 2019 23:55:00").getTime();
    const now = new Date().getTime();
    const distance = testDate - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    // TO-DO: if include coming soon, status to inactive ???
    this.setState({
      countdown: `Next batch opens on: ${day} day(s)`,
      status: 'active'
    })
    if (distance <= 0) {
      this.setState({
        countdown: `Coming Soon`,
        status: 'inactive',
      })
    }
  }
  routeToDetail() {
    this.props.history.push('/detail')
  }
  render() {
    // get ref from sibling???
    return (
      <div>
        <Header title="Get your real work experience here!" subtitle="Build experience and skills with our experienced Mentor and Work Experience Programs." refToScroll={this.dataFromHeader} btn_text="Get early access" btn_url="https://hands-on.typeform.com/to/mA1QIC" section="home"/>
        <div style={{backgroundColor: "#F4F4F4"}} ref={this.state.listDataFromChild}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">Available Hands-On Courses</h1>
              </div>
            </div>
            <div className="row justify-content-md-center" id="course">
              <CourseCard title="Product Management" subtitle={this.state.countdown} img_url="card1" button="http://google.com" path="detail" status={this.state.status} onClick={this.routeToDetail} style={{cursor: 'pointer'}}/>
              <CourseCard title="Product Design" subtitle="Coming Soon" img_url="card2" button="http://google.com" path="detail"  status="inactive"/>
              <CourseCard title="UX Research" subtitle="Coming Soon" img_url="card3" button="http://google.com" path="detail"  status="inactive"/>
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
              <div className="col-md-6 pl-md-5 pl-sm-0 pt-3 pt-md-0">
                <div className="embed-container">
                  <iframe src="https://www.youtube.com/embed/OGZwpPWwAWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div className="container pt-5 pb-5 about-section">
            <div className="row">
              <div className="col-sm-4">
                <DescIcon img_url="icon-2" title="Real Hands-On Project" subtitle="With real Hands-on projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want."/>
              </div>
              <div className="col-sm-4">
                <DescIcon img_url="icon-3" title="Mentored by Experts" subtitle="Get a knowledgeable mentor who guides your learning and is focused on answering your questions, motivating you and keeping you on track."/>
              </div>
              <div className="col-sm-4">
                <DescIcon img_url="icon-1" title="Hired in Top Companies" subtitle="You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help you grow in your career."/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#F4F4F4"}}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-12">
                <h1 className="bold-title">What They Said About Hands-On</h1>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-4">
                <TestimoniCard name="Fathya Annasya" role="Software Quality Assurance Intern Mapan - PT Ruma" img_url="nasy" review="Saya percaya pada pembelajaran seumur hidup, dan Hands-On adalah tempat yang hebat untuk belajar dari expert. Saya belajar banyak dan merekomendasikannya ke semua teman saya."/>
              </div>
              <div className="col-md-4 pt-5 pt-md-0">
                <TestimoniCard name="M. Fawwaz Syarif" role="Product Management Intern Traveloka" img_url="fawwaz" review="Saya bekerja di manajemen proyek dan bergabung dengan Hands-On karena saya mendapatkan kursus hebat. Mentor-mentornya luar biasa, menarik, dan sangat membantu. Terima kasih Hands-On!"/>
              </div>
              <div className="col-md-4 pt-5 pt-md-0">
                <TestimoniCard name="Ivan Abdurrahman" role="Product Designer Intern Kargo Tech" img_url="ivan" review="Bagian terbaik dari Hands-On adalah pilihannya. Kamu dapat menemukan job position untuk semua hal yang ingin Kamu pelajari! Coba aku tahu dari dulu, pasti sudah daftar dari awal."/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-6 first-card">
                <RegisterCard title="Be one of our mentors" subtitle="Positively impact a student's life." btn_text="Create mentor account"/>
              </div>
              <div className="col-md-6">
                <RegisterCard title="Hire our best participants" subtitle="Get best candidates for your company." btn_text="Create company account"/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}