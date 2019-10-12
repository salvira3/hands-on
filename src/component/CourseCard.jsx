// props: title, subtitle, image?? logo here
import React from 'react';
import '../mystyle.css';

export class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      img_url: '',
      button: '',
      path: ''
    }
  }
  render() {
    if (this.props.button !== undefined) {
      return(
        <div className="col-md-4 col-sm-12 pt-5 pb-5">
          <div className="thumbnail-container">
            <img src={require(`../asset/${this.props.img_url}.png`)} alt="course"/>
            <h4 class="bold-title title">{this.props.title}</h4>
            <h5 class="subtitle-content content">{this.props.subtitle}</h5>
          </div>
          <div className="pr-4 pl-4">
            <a href={this.props.button} target="_blank" rel="noopener noreferrer"><button class="btn btn-home btn-block mt-4 bold-title">Register Now</button></a>
          </div>
          <div className="link text-center p-2 bold-title">
            <a href="http://google.com">I want to know more</a>
          </div>
          
        </div>
      )
    }
    else {
      return(
        <div className="col-md-4 col-sm-12 pt-5">
          <div className="thumbnail-container">
            <img src={require(`../asset/${this.props.img_url}.png`)} alt="course"/>
            <h4 class="bold-title title">{this.props.title}</h4>
            <h5 class="subtitle-content content">{this.props.subtitle}</h5>
          </div>
          <div className="text-center pt-4 bold-title">
            <p>Coming soon!</p>
          </div>
        </div>
      )
    }
    
  }
}