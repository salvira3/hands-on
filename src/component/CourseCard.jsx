// props: title, subtitle, image?? logo here
import React from 'react';
import '../mystyle.css';
import { Link } from 'react-router-dom';

export class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      img_url: '',
      button: '',
      path: '',
      status: '',
      
    }
  }
  render() {
    if (this.props.status === 'active') {
      return(
        <div className="col-md-4 col-sm-12 pt-5">
          <div className="thumbnail-container">
            <img src={require(`../asset/${this.props.img_url}.png`)} alt="course"/>
            <h4 class="bold-title title">{this.props.title}</h4>
            <p class="subtitle-content content">{this.props.subtitle}</p>
          </div>
          
          
        </div>
      )
    }
    else {
      return(
        <div className="col-md-4 col-sm-12 pt-5 disable-thumbnail">
          <div className="thumbnail-container">
            <img src={require(`../asset/${this.props.img_url}.png`)} alt="course"/>
            <h4 class="bold-title title">{this.props.title}</h4>
            <p class="subtitle-content content">{this.props.subtitle}</p>
          </div>
        </div>
      )
    }
    
  }
}