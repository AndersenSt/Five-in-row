import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import reducer from './reducers';
import initialState from './initialState';
import StartPage from './containers/StartPage';
import GamePage from './containers/GamePage';
import GameOverPage from './containers/GameOverPage';
import middleware from './middleware';

const store = middleware(createStore)(reducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path='/' component={StartPage} />
                <Route path='/game' component={GamePage} />
                <Route path='/game-over' component={GameOverPage} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('root'));