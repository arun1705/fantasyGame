import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/matchlist';
import Contest from './components/contests';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Contests: { screen: Contest },
});
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
