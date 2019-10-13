//props img, name, role, text
import React from 'react';
import '../mystyle.css';

export class TestimoniCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      name: '',
      role: '',
      img_url: '',
      review: '',
    }
  }
  render() {
    return(
      <div className="testimoni-card pt-4">
        <div className="container">
          <div className="row">
            <div className="col-3 pr-0">
              <img className="rounded-circle" src={require(`../asset/${this.props.img_url}.png`)} alt=""/>
            </div>
            <div className="col-9 person-info">
              <p className="bold-title">{this.props.name}</p>
              <p className="subtitle-role">{this.props.role}</p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12">
              <p className="subtitle-content">
                {this.props.review}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}