// props: title, subtitle, image?? logo here
import React from 'react';
import '../mystyle.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      img_url: '',
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-home">
            <div className="logo">
              <img src={require('../asset/logo.png')} alt="logo"/>
            </div>
            <div className="container first-header-padding">
              <div className="row">
                <div className="col-12 col-md-7">
                  <h1 className="font-weight-bold">
                    Get your real work experience here!
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 pt-3">
                  <h4 className="subtitle-content">Get a chance to try your dream job position. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 pt-3">
                  <button class="btn btn-home btn-block mt-2">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}