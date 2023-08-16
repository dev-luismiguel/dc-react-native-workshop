/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
