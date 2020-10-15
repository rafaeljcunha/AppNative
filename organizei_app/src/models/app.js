export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    *loadStorage(action, {call, put}) {},
    *login({payload}, {call, put}) {},
    *logout(action, {call, put}) {},
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'loadStorage'});
    },
  },
};
