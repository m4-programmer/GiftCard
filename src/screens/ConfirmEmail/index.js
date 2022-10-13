import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInputs from '../../components/CustomInputs'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'

const SetNewPassword = ({changeScreen}) => {
    const [code, setCode] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigation = useNavigation()

   const GoToLoginScreen = () => {
       navigation.navigate('SignIn')
  }
  const onSignInPressed = () => {
    navigation.navigate('Home')
  }
    const ResendCode = () => console.warn('Code Resent')    
  return (
    <View  style={styles.root}>
          <Text style={styles.title }>Confirm Your Email</Text>
          <CustomInputs placeholder={'Enter Your Confirmation Code'} value={code} setValue={setCode} />
          
      <Buttons text={'Confirm'} onPress={ onSignInPressed} />
          <Button text='Resend Code' type='SECONDARY' onPress={ResendCode} />
          <Button text='Back to Sign in' type='TERTIARY' onPress={GoToLoginScreen} />
    </View>
  )
}
const styles = StyleSheet.create({
     root: {
    alignItems: 'center',
    padding: 20,
  },
    title: {
        color: '#051C60',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },

});
export default SetNewPassword