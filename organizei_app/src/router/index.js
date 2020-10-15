import React, {PureComponent} from 'react';
import {BackHandler} from 'react-native';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationActions} from 'react-navigation';

import {connect} from 'react-redux';
import AppComponent from '../../App';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.router,
);

const App = reduxifyNavigator(AppNavigator, 'root');

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router);
    // if (currentScreen === 'Login') {
    //   return true;
    // }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back());
      return true;
    }
    return false;
  };

  render() {
    const {app, dispatch, router} = this.props;
    if (app.loading) {
      return <p>Carregando</p>;
    }

    return <App dispatch={dispatch} state={router} />;
  }
}

export default connect(({app, router}) => ({app, router}))(Router);
