import React from 'react'
import { View,Text,Button } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

function App(props) {
  return (  
  <View> 
    <Text style={{fontsize:20}}>App Component</Text>
    <Button title="go to profile" onPress={()=>{props.navigation.navigate("Profile")}}/>    
  </View>

  )
}
const Profile=(props)=>{
  return(
    <View>
      <Text style={{fontSize:30}}>Profile Component</Text>
      <Button title="go to Home" onPress={()=>{props.navigation.navigate("Home")}}/>  
    </View>
  )
}
const AppNavigator=createStackNavigator({
  Home:App,
  Profile:Profile
});
export default createAppContainer(AppNavigator);
