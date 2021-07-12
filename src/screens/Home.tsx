import React from 'react';
import {View, Text} from 'react-native';
import {useAuthContext} from '../context/AuthContext';

export const HomeScreen = () => {
  const {
    authState: {profile},
  } = useAuthContext();
  return (
    <View>
      <Text>User Profile: {JSON.stringify(profile, null, 4)}</Text>
    </View>
  );
};
