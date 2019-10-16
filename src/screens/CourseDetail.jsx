import React from 'react';
import { Header } from '../component/Header';

export class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
    }
  }
  componentDidMount = () => {
    document.title = "Product Management Course at Hands-On"
  }
  dataFromHeader = (myData) => {
    this.setState({
      listDataFromChild: myData
    })
  }
  render() {
    return (
      <div>
        <Header title="How It Feels Like a Product Manager" subtitle="This program will give you a taste for some of the challenging problems that Product Manager tackles each day!" btn_text="Enroll me right now" btn_url="https://hands-on.typeform.com/to/mA1QIC" section="product" refToScroll={this.dataFromHeader}/>
      </div>
    )
  }
}