// props: img url, name, role
import React from 'react';
import '../mystyle.css';

export class MentorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      name: '',
      role: '',
      img_url: '',
      active: null,
    }
  }
  render() {
    return(
      <div className="mentor-card">
        <div className={"mentor-img-" + (this.props.active ? "active" : "inactive")}>
          <img src={require(`../asset/${this.props.img_url}.png`)} alt=""/>
        </div>
        <h5 className="bold-title pt-3">{this.props.name}</h5>
        <p className="subtitle-content">{this.props.role}</p>
      </div>
    )
  }
}