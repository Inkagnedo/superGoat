import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { SignIn } from './components/pages/SignIn';
import { Layout } from './components/Layouts/Layout';
import { NavBar } from './components/Layouts/NavBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Layout>
          <Router>
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/signin' exact={true} component={SignIn} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
