import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

//ローカルインポート
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';

//起動画面
const Start = {
  screen: StartScreen,
  navigationOptions: ({navigation}) => {
    return {title: '起動画面'};
  },
};

//ホーム画面
const Home = {
  screen: HomeScreen,
  navigationOptions: ({navigation}) => {
    return {title: 'ホーム画面'};
  },
};

const MainNavigation = createStackNavigator(
  {
    Start,
    Home,
  },
  {
    mode: 'card',
    //headerMode: 'none',
    initialRouteName: 'Start', //最初に表示させる画面を設定
  },
);

export default AppNavigator = createAppContainer(MainNavigation);
