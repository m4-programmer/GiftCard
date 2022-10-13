import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Navigation from './src/navigation/Index';
import SignIn from './src/screens/SignIn/SignIn';





const App = () =>  {

  
  return (
    <SafeAreaView style={styles.container}>
  
      <Navigation />
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f9fbfc',
    // backgroundColor: '#ddd',
    flex: 1,
    color: 'black'
    
 }
});

export default App;
