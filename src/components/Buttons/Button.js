import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default  Button = ({text,extra, bgColor,fgColor, onPress,type = 'PRIMARY'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.body, styles[`${type}`], bgColor ? {backgroundColor: bgColor} : {} ]}>
       {/* <Pressable> */}
      <Text style={[{ color: 'white', fontWeight: 'bold' }, styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>{text}
        <Text style={{ color: 'coral' }}> { extra}</Text></Text>
      
        {/* </Pressable>    */}
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
  },
  PRIMARY: {
     backgroundColor: '#3871f3',
  },
  TERTIARY: {
    
  },
  SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },  
  text_TERTIARY: { color: 'grey' },
  text_SECONDARY:{ color: '#3B71F3'}
})