import React from 'react'
import { View,Text,Button } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

function App(props) {

  const data={name:'satish kumar',email:"satishkumar998475@gamil.com"}
  return (  
  <View> 
    <Text style={{fontsize:20}}>App Component</Text>
    <Button title="go to profile" onPress={()=>{props.navigation.navigate("Profile",{data})}}/>    
  </View>

  )
}
const Profile=(props)=>{
  console.warn(props.navigation.getParam('data'))
  const item=props.navigation.getParam('data')
  return(
    <View>
      <Text style={{fontSize:30}}>
        {item.name}
        Profile Component1</Text>
      <Button title="go to Home" onPress={()=>{props.navigation.navigate("Home")}}/>  
    </View>
  )

}
const AppNavigator=createStackNavigator({
  Home:App,
  Profile:Profile
});
export default createAppContainer(AppNavigator);
