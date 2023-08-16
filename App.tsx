/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Navigator from './src/navigation/Navigator';
// import { Provider } from 'react-redux';
// import { store } from 'src/store/store';
import { Text } from 'src/components';
import { View } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text text="Hello World!" />
    </View>
  );
  // return (
  //   <SafeAreaProvider>
  //     <Provider store={store}>
  //       <Navigator />
  //     </Provider>
  //   </SafeAreaProvider>
  // );
};

export default App;
