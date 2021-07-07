import React from 'react'
import { View,Text } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Profile from './Component/Profile'
function App() {
  return (  
  <View> 
    <Text style={{fontsize:20}}>Props</Text>
    <Profile data={"Satish kumar"} />
  </View>

  )
}

const AppNavigator=createStackNavigator({
  Home:{
    screen: App,
  }
});
export default createAppContainer(AppNavigator);
