// props number (can iterate???), title, subtitle, desc
import React from 'react';
import '../mystyle.css';

export class NumberDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      desc: '',
      number: '',
    }
  }
  render() {
    return(
      <div className="number-desc">
        <div className="row">
          <div className="col-2">
            <div className="colored-number">
              <h1 className="bold-title">{this.props.number}</h1>
            </div>
            
          </div>
          <div className="col-10">
            <h4 className="bold-title">{this.props.title}</h4>
            <h5 className="subtitle-content">{this.props.subtitle}</h5>
            <p className="subtitle-content">{this.props.desc}</p>
          </div>
        </div>
      </div>
    )
  }
}