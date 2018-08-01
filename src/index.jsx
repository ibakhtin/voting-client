import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import App from './components/App';
import reducer from './reducer';
import {VotingContainer} from './components/Voting';
import {ResultsCantainer} from './components/Results';
import {setState} from './action_creators';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => 
  store.dispatch(setState(state))
);

const routes = (
  <Route component={App}>
    <Route path="/results" component={ResultsCantainer} />
    <Route path="/" component={VotingContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
