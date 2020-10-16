import React from 'react';
import {AppRegistry} from 'react-native';
import models from './models';
import Routers from './router';
import Dva from './utils/dva';
import Navigator from './utils/navigator';
import {name as appName} from '../app.json';
import AppNavigator from './router/navigator/AppNavigator';

const {routerMiddleware, routerReducer} = Navigator;

const app = Dva.init({
  initialState: {},
  models,
  extraReducers: {router: routerReducer(AppNavigator)},
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Routers />);

AppRegistry.registerComponent(appName, () => App);
