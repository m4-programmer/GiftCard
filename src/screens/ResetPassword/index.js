import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomInputs from '../../components/CustomInputs'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'

const index = () => {
  const [username, setUsername] = React.useState('')
  
  const navigation = useNavigation()
  const onSendPressed = () => {
    navigation.navigate('SetNewPassword')
  }
   const GoToLoginScreen = () => {
       navigation.navigate('SignIn')
  }
  return (
    <View  style={styles.root}>
          <Text style={styles.title }>Reset Your password</Text>
          <CustomInputs placeholder={'Enter Username'} value={username} setValue={setUsername} />
          <Buttons text={'Send'} onPress={onSendPressed} />
          <Button text='Back to Sign in' type='TERTIARY' onPress={GoToLoginScreen}  />
    </View>
  )
}

const styles = StyleSheet.create({
     root: {
    alignItems: 'center',
    padding: 20,
  },
    title: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold'
    },

});
export default index