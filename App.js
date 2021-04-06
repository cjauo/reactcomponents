import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './components/Navigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


export default class App extends React.Component {
  state ={
    isFontLoaded: false
  }
  
  async componentDidMount(){
    await Font.loadAsync({
      "SemiBold" : require('./components/fonts/Montserrat-SemiBold.otf'),
      "Medium" : require('./components/fonts/Montserrat-Medium.otf'),
      "Regular" : require('./components/fonts/Montserrat-Regular.otf'),
      "ExtraBold" : require('./components/fonts/Montserrat-ExtraBold.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
