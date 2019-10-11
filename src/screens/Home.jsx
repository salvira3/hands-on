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
        <Header title="Get your real work experience here!" subtitle="Get a chance to try your dream job position. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
      </div>
    )
  }
}