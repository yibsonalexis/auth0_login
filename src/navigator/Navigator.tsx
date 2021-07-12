import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../screens';
import {useAuthContext} from '../context/AuthContext';
import {RegisterScreen} from '../screens/register';

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const {
    authState: {credentials},
  } = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      {!credentials?.idToken ? (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{title: 'Register'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
