import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import {VotingContainer} from './components/Voting';
import Results from './components/Results';
import reducer from './reducer';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

const routes = (
  <Route component={App}>
    <Route path="/results" component={Results} />
    <Route path="/" component={VotingContainer} />
  </Route>
);

ReactDOM.render(
  <Provider>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
