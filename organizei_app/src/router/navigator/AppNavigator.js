import Navigator from '../../utils/navigator';
import Home from '../../screens/Home/index';
import Login from '../../screens/Login/index';
import MainEntrance from '../../screens/MainEntrance/index';
import Register from '../../screens/Register/index';
import Camera from '../../components/RNCamera/index';
import LoadingRegister from '../../components/LoadingEnterRegister/index';

const AppNavigator = Navigator.createStackNavigator({
  Main: {screen: Home, navigationOptions: {title: '', header: () => false}},
  Login: {screen: Login, navigationOptions: {title: '', header: () => false}},
  Register: {
    screen: Register,
    navigationOptions: {title: '', header: () => false},
  },
  Camera: {
    screen: Camera,
    navigationOptions: {title: '', header: () => false},
  },
  LoadingRegister: {
    screen: LoadingRegister,
    navigationOptions: {title: '', header: () => false},
  },
  MainEntrance: {
    screen: MainEntrance,
    navigationOptions: {title: '', header: () => false},
  },
});

export default AppNavigator;
