import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/WeatherPage';
import Registration from './pages/Registration';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    const isUserLoggedIn = true;

    return (
      <div className="container">
        <Router>
          {isUserLoggedIn && <div>asdasd</div>}
          <Switch>
            <Route component={Registration} path="/" exact />
            <Route component={Weather} path="/weather" exact />
            <Route component={Login} path="/login" exact />
            <Route path="City/:id" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
