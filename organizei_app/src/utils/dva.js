import React from 'react';
import {create} from 'dva-core';
import createLoading from 'dva-loading';
import {Provider, connect} from 'react-redux';

export const createAction = (payload) => ({type: 'updateState', payload});

export const createActions = (type) => (payload) => ({type, payload});

export function init(options) {
  const app = create(options);
  app.use(createLoading());
  if (!global.registered) {
    options.models.forEach((model) => app.model(model));
  }
  global.registered = true;
  app.start();
  const store = app._store;
  app.start = (container) => () => (
    <Provider store={store}>{container}</Provider>
  );
  app.getStore = () => store;
  return app;
}

export default {
  connect,
  createAction,
  createActions,
  init,
  createLoading,
};
