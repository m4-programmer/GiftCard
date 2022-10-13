import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomInputs from '../../components/CustomInputs'
import Buttons from '../../components/Buttons'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'


const SignOut = ({changeScreen}) => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const navigation = useNavigation()
    const Register = () => {
        navigation.navigate('ConfirmEmail')
    }
    const Login = () => {
       navigation.navigate('SignIn')
    }
    const onTermsOfUsePressed = () => {
        console.warn('Terms of use Pressed')
    }
    const onPrivacyPressed = () => {
        console.warn('Privacy Pressed')
    }
  return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Create An Account</Text>
          <CustomInputs placeholder={'Username'} value={username} setValue={setUsername} />
          <CustomInputs placeholder={'Email'} value={email} setValue={setEmail}  />
          <CustomInputs placeholder={'Password'} value={password} setValue={setPassword}  secureTextEntry/>
          <CustomInputs placeholder={'Confirm Password'} value={confirmPassword} setValue={setConfirmPassword}  secureTextEntry />
            <Buttons text={'Register'} onPress={Register} />
            <Text style={styles.text} >By registering, you confirm that you accept our
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text>  and
                <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
            </Text>
          <Buttons text={'Already have an account?'} extra={'Log In'} onPress={Login} type='TERTIARY' />
               {/* SIGN IN WITH OTHER PROVIDERS */}
            <SocialSignInButtons />
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    header: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        color: 'gray',  
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
})

export default SignOut