
import React from 'react';
import '../mystyle.css';

export class CountdownNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }
  }
  render() {
    return(
      <div className="countdown-number text-center">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <h1>{this.props.days}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="subtitle-content ">Days</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <h1>{this.props.hours}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="subtitle-content ">Hours</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <h1>{this.props.minutes}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="subtitle-content ">Minutes</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <h1>{this.props.seconds}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="subtitle-content ">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}