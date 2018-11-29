import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes, NotFoundPage } from './routes/index';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';
import store from './store';
import {Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Router>
          <Fragment>
            <Helmet
              title='Photben'
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header />
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.key}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div >
      </Provider>
    );
  }
}

export default App;
