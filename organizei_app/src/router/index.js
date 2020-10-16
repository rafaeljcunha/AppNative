import React, {PureComponent} from 'react';
import {BackHandler, Text} from 'react-native';
// import Loading from '@/components/Loading';
import Dva from '../utils/dva';
import Navigator from '../utils/navigator';
import AppNavigator from '../router/navigator/AppNavigator';

const {App} = Navigator;
const AppContainer = App(AppNavigator);

/**
 * 整个路由管理
 */

class Routers extends PureComponent {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }
  backHandle = () => {
    const currentScreen = Navigator.getActiveRouteName(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(Navigator.back());
      return true;
    }
    return false;
  };

  render() {
    const {app, dispatch, router} = this.props;
    if (app.loading) {
      return <Text>Carregando</Text>;
    }
    return <AppContainer dispatch={dispatch} state={router} />;
  }
}

export default Dva.connect(({app, router}) => ({app, router}))(Routers);
