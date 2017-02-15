import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/actions/recipes'

//components 
import AppContainer from './app/containers/AppContainer'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__ });

function configureStore() {
  const enhancer = compose(
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        ),
    );
  return createStore(reducer, enhancer)
}

const store = configureStore()

import {
  AppRegistry,
} from 'react-native';

export default class redditTestApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('redditTestApp', () => redditTestApp);
