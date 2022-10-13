import { View, Text } from 'react-native'
import React from 'react'
import Buttons from '../Buttons'
const SocialSignInButtons = () => {
    const onSignInFacebook = () =>{
    console.warn('Signed in With Facebook')
  }
  const onSignInGoogle = () =>{
    console.warn('Signed in With Google')
  }
  const onSignInApple = () =>{
    console.warn('Signed in With Apple')
  }
  return (
    <>
      {/* SIGN IN WITH OTHER PROVIDERS */}
        <Buttons text={'Sign in with Facebook'} onPress={onSignInFacebook}  bgColor={'#E7EAF4'} fgColor={'#4765A9'} />
        <Buttons text={'Sign in with Google'} onPress={onSignInGoogle}  bgColor={'#FAE9EA'} fgColor={'#DD4D44'} />
        <Buttons text={'Sign in with Apple'} onPress={onSignInApple} bgColor={'#E3E3E3'} fgColor={'#363636'} />
    </>
  )
}

export default SocialSignInButtons