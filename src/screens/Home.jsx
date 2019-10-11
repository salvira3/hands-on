import React from 'react';
import { Header } from '../component/Header';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}