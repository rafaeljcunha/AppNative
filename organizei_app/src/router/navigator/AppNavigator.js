import {Animated, Easing} from 'react-native';
import Navigator from '../../utils/navigator';
import Home from '../../screens/Home/index';
import Login from '../../screens/Login/index';
import Register from '../../screens/Register/index';

const AppNavigator = Navigator.createStackNavigator({
  Main: {screen: Home, navigationOptions: {title: '', header: () => false}},
  Login: {screen: Login, navigationOptions: {title: '', header: () => false}},
  Register: {
    screen: Register,
    navigationOptions: {title: '', header: () => false},
  },
});

export default AppNavigator;
