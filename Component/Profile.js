import React, {useState} from 'react';
import { Text, View,Button } from 'react-native';

const Profile=()=> {

   const [data,setData]=useState(0)
   return (
      <View>
         <Text style={{fontSize:100}}>{data}</Text>
         <Button onPress={()=>setData(10)}
          title="Update State" />
      </View>

   )
}
export default Profile;
 