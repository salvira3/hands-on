// props: title, subtitle, image?? logo here
import React from 'react';
import '../mystyle.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.scrollFocus = React.createRef()

    this.state = {}
    this.props = {
      title: '',
      subtitle: '',
      img_url: '', // future improvement, conditional bg ?? button availability ??
    }
  }
  buttonOnClick = (event) => {
    if (this.scrollFocus.current) {
      this.scrollFocus.current.scrollIntoView({
        behavior: "smooth", 
        block: "nearest"
      })
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
                    {this.props.title}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 pt-3">
                  <h4 className="subtitle-content">{this.props.subtitle}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 pt-3 pb-3">
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