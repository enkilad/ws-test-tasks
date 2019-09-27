import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/Weather Page';
import Registration from './pages/Registration';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route component={Registration} path="/" exact />
            <Route component={Weather} path="/weather" exact />
            <Route component={Login} path="/login" exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
