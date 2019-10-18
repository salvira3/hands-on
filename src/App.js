import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { CourseDetail } from './screens/CourseDetail';
import ScrollToTop from './component/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop/>
        <div>
          <div className="container-fluid px-0">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={CourseDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
