
import { View,Text,Button } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import React from 'react'

 function App() {
    return (
      <View> 
      <Text style={{textAlign:"center",fontsize:30}}>Home navigation</Text>
      </View>
    )
  
}

function Profile()
{
  return(
    <View>
      <Text style={{textAlign:"center",fontSize:30}}>
        Profile navigation</Text>

    </View>
  )

}
const AppNavigator=createBottomTabNavigator({
  Home:
  {
    screen:App
  },
  Profile: 
  {
    screen:Profile
  }
});
export default createAppContainer(AppNavigator)