import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from './src/navigator/navigator';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContextProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
