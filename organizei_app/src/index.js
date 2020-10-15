import 'react-native-gesture-handler';

import React from 'react';
import {name as appName} from '../app.json';
import {AppRegistry} from 'react-native';

import dva from './utils/dva.js';
import Router, {routerMiddleware, routerReducer} from './router/index.js';
import appModel from './models/app.js';

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: {router: routerReducer},
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e);
  },
});
console.log(app);
const App = app.start(<Router />);

AppRegistry.registerComponent(appName, () => App);
