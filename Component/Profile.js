import React, {useState} from 'react';
import { Text, View } from 'react-native';

const Profile=(props)=> {

   return (
      <View>
         <Text style={{fontSize:100}}>{props.data}</Text>

      </View>

   )
}
export default Profile;
 