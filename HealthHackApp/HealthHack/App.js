import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Health Hack'
  }
});

export default createAppContainer(navigator);