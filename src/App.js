import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history'

import DevicesContainer from "./devices/containers/DevicesContainer";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/devices' />} />
        <Route path='/devices' render={(props) =>
          <DevicesContainer />
        }
        />
      </Switch>
    </Router>
  );
}

export default App;
