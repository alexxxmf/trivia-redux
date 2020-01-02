import { createAppContainer, createSwitchNavigator } from "react-navigation";
import TriviaStartScreen from "../screens/TriviaStartScreen";
import TriviaQuestionsScreen from "../screens/TriviaQuestionsScreen";
import TriviaResultsScreen from "../screens/TriviaResultsScreen";

export const persistenceKey = "newKey10";

const navigationScreens = {
  TriviaStartScreen,
  TriviaQuestionsScreen,
  TriviaResultsScreen,
};

const AppNavigator = createSwitchNavigator(navigationScreens);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
