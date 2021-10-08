import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './auth';
import SuccessStack from './success';

type AppStackParams = {
  AuthStack: undefined;
  Success: undefined;
  token: any;
};

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack = () => {
  const [token, setToken] = React.useState('');
  return (
    <Stack.Navigator>
      {!token ? (
        <Stack.Screen
          name="AuthStack"
          options={() => ({
            title: '',
            headerShown: false,
          })}
          component={AuthStack}
        />
      ) : (
        <Stack.Screen
          name="Success"
          options={() => ({
            title: '',
            headerShown: false,
          })}
          component={SuccessStack}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
