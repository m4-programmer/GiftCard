import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import ResetPassword from '../screens/ResetPassword'
import SetNewPassword from '../screens/ResetPassword/SetNewPassword';
import ConfirmEmail from '../screens/ConfirmEmail'
import Home from '../screens/Home/Index'

const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name='SignIn' component={SignIn} />
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} /> */}
              {/* <Stack.Screen name='ResetPassword' component={ResetPassword} /> */}
              {/* <Stack.Screen name='SetNewPassword' component={SetNewPassword} /> 
              <Stack.Screen name='Home' component={Home} />  */}
              
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation