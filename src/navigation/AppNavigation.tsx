import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TriviaStart from '../screens/TriviaStart';
import TriviaQuestion from '../screens/TriviaQuestion';

export const persistenceKey = 'newKey10';

const navigationScreens = {
  TriviaStart,
  TriviaQuestion
};

const AppNavigator = createSwitchNavigator(navigationScreens);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
