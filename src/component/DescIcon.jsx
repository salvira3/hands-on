//props img, title, subtitle
import React from 'react';
import '../mystyle.css';

export class DescIcon extends React.Component {
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
    return(
      <div className="desc-icon">
        <img src={require(`../asset/${this.props.img_url}.png`)} alt=""/>
        <h4 className="bold-title pt-3">{this.props.title}</h4>
        <p className="subtitle-content pt-3">{this.props.subtitle}</p>
      </div>
    )
  }
}