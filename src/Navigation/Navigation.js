import {
  createStackNavigator,
  createAppContainer
} from "react-navigation-stack";
import MainScreen from "./Components/MainScreen";

const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);
