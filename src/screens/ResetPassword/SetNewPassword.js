import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInputs from '../../components/CustomInputs'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'

const SetNewPassword = ({changeScreen}) => {
    const [code, setCode] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation()

    const onSubmitPressed = () => {
    navigation.navigate('Home')
  }
   const GoToLoginScreen = () => {
       navigation.navigate('SignIn')
  }
  return (
    <View  style={styles.root}>
          <Text style={styles.title }>Reset Your password</Text>
          <CustomInputs placeholder={'Enter Code'} value={code} setValue={setCode} />
          <CustomInputs placeholder={'Enter your new password'} value={[password]} setValue={setPassword} />
      <Buttons text={'Submit'} onPress={onSubmitPressed } />
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