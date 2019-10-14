// props: title, subtitle, image?? logo here
import React from 'react';
import '../mystyle.css';
import { Navbar } from '../container/Navbar';

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
    this.buttonOnClick = this.buttonOnClick.bind(this)
    
  }
  componentDidMount() {
    this.props.refToScroll(this.scrollFocus)
  }
  buttonOnClick = (event) => {
    
    if (this.scrollFocus.current) {
      this.scrollFocus.current.scrollIntoView({
        behavior: "smooth", 
        block: "nearest"
      })
    }
  }
  // to do: separate logo to 1 component with navbar
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-home">
            <Navbar/>
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
                  <a href="https://hands-on.typeform.com/to/mA1QIC" target="_blank" rel="noopener noreferrer"><button class="btn btn-home pr-5 pl-5 mt-2">Get early access</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}