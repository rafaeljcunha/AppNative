import {
  NavigationActions,
  StackActions,
  createAppContainer,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

export const App = (index) =>
  createAppContainer(createReduxContainer(index, 'root'));

export const routerReducer = (index) => createNavigationReducer(index);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  (state) => {
    if (state.router) {
      return state.router;
    }
    return null;
  },
  'root',
);

export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export function go(navigate) {
  if (!navigate) {
    return {};
  }
  return NavigationActions.navigate(navigate);
}

export function back(navigate) {
  if (navigate) {
    return NavigationActions.back(navigate);
  }
  return NavigationActions.back();
}

export default {
  go,
  back,
  StackActions,
  NavigationActions,
  createAppContainer,
  createStackNavigator,
  routerReducer,
  routerMiddleware,
  App,
  getActiveRouteName,
};
