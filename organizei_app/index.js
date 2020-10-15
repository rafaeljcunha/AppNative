import {LogBox} from 'react-native';
import './src/index.js';

LogBox.ignoreLogs = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: isMounted(...) is deprecated',
];
