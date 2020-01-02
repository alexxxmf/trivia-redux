import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import AppContainer from './navigation/AppNavigation';
import store from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
};

export default App;
