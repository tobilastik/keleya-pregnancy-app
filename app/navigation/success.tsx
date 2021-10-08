import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SuccessScreen from '../screens/success';

type SuccessStackParams = {
  Success: undefined;
};

const Stack = createNativeStackNavigator<SuccessStackParams>();

const SuccessStack = () => {
  return (
    <Stack.Navigator initialRouteName="Success">
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default SuccessStack;
