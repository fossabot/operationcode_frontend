import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Home from './scenes/home/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-75642413-1', { debug: true });
      this.history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });
    }
  }

  render() {
    return (
      <Router history={this.history} >
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
