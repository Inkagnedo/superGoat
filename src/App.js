import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Signup } from './Signup';
import { Main } from './Main';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/main' component={Main} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
