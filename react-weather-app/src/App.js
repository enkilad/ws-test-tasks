import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/Weather Page';
// import Login from './container/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route component={Login} path="/" exact/> */}
          <Route component={Weather} path="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
