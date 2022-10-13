import { View, Text,Image,StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Ham from '../../../assets/images/Ham.png'
import TestData from '../../../assets/Datas/TestData'
import CustomInputs from '../../components/CustomInputs'
import Buttons from '../../components/Buttons'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'

import { useNavigation } from '@react-navigation/native'

export default SignIn = ({ changeScreen, showForgottenPassword }) => {
  const navigation = useNavigation()

  const [username, setUsername] = React.useState('')
  const [ password, setPassword ] = React.useState('')
 
  const { height } = useWindowDimensions();
  // Logic for SIgn in Button
  const onSignInPressed = () => {
    navigation.navigate('Home')
  }
 // Logic for Forget Password Button
  const onForgetPressed = () => {
    navigation.navigate('ResetPassword')
  }

  const onCreateAccount = () => {
  navigation.navigate('SignUp')
  }

  // console.warn(height, height* 0.3)
  // console.log(useWindowDimensions())
  return (
    <ScrollView >
      <View style={styles.root}>
        {/* SignIn Logo */}
        <Image source={Ham} style={[styles.logo, { height: height * 0.3 }]} resizeMode={'contain'} />
        <Text style={styles.welcome}>Hello! Welcome Back</Text>
        {/* Sign In Inputs */}
        <CustomInputs
          placeholder={'Enter Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInputs placeholder={'Enter Password'} value={password}
          setValue={setPassword} secureTextEntry />
        <Buttons text={'Sign in'} onPress={onSignInPressed} />
        <Buttons text={'Forgot Password'} onPress={onForgetPressed} type='TERTIARY' />
        {/* SIGN IN WITH OTHER PROVIDERS */}
        <SocialSignInButtons />
        {/* Don't have an account */}
        <Buttons text={'Don\'t have an account?'} extra={'Register Now'} onPress={onCreateAccount} type='TERTIARY' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  welcome: {
    color: '#000',
    fontSize: 16,
    paddingVertical: 15,
  }
  
})

