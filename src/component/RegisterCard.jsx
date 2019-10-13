//props: title, subtitle, url, btn-text
import React from 'react';
import '../mystyle.css';

export class RegisterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      url: '', //ini bentuknya path tp kan nanti?
      btn_text: '',
    }
  }
  render() {
    return (
      <div className="reg-card text-center">
        <h3 className="bold-title pt-5">{this.props.title}</h3>
        <h4 className="subtitle-content pt-3">{this.props.subtitle}</h4>
        <button className="btn btn-home-inverse mt-5 pr-5 pl-5">{this.props.btn_text}</button>
      </div>
    )
  }
}