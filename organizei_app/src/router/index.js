import React, {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {connect} from '../utils/dva';
import Navigator from '../utils/navigator';
import AppNavigator from '../router/navigator/AppNavigator';

const {App} = Navigator;
const AppContainer = App(AppNavigator);

function Routers({dispatch, router}) {
  const backHandle = useCallback(() => {
    const currentScreen = Navigator.getActiveRouteName(router);
    if (currentScreen !== 'Home') {
      dispatch(Navigator.back());
      return true;
    }
    return false;
  }, [dispatch, router]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backHandle);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandle);
  }, [backHandle]);

  return <AppContainer dispatch={dispatch} state={router} />;
}

export default connect(({router}) => ({router}))(Routers);
