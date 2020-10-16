import {LogBox} from 'react-native';
import 'react-native-gesture-handler';

import './src/index.js';

LogBox.ignoreLogs = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: isMounted(...) is deprecated',
  'Warning: createStackNavigator is deprecated',
  'Warning: transitionConfig is removed in favor of the new animation APIs',
  'Warning: navigationOptions is deprecated',
];
