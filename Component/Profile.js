

import React from 'react';
import {TouchableOpacity,SafeAreaView,Text,StyleSheet,  View } from 'react-native';

 function Profile() {
  return (
<SafeAreaView
        style={{
//          backgroundColor: themeStyles.grey1,
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>HEADER</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Text>HEADER</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonNextContainer}
            onPress={() => {
           //   navigation.navigate('Home');
            }}
          >
            <Text style={styles.buttonNextText}>ACCEPT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonDeclineContainer}
            onPress={()=>{}}
          >
            <Text style={styles.buttonDeclineTest}>DECLINE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
  );
}
 const styles = StyleSheet.create({
  

  buttonNextContainer:{
      backgroundColor:'#525252', 
      width:"90%",
      flexDirection:"row",
      justifyContent:"center",
      textAlign:"center",
      height:70,
      marginTop:10,
      margin:10,
   },
   buttonNextText:{
      color: '#f9f9f9',
      fontWeight: 'normal',
      fontSize: 23,
      margin: "20px",
   },

   buttonDeclineContainer:{
      // backgroundColor:'#e8e8e8', 
      width:"90%",
      flexDirection:"row",
      justifyContent:"center",
      textAlign:"center",
      height:70,
      marginTop:10,
      margin:10,
      borderWidth:3,  
      borderColor:'#8a8a8a',
   },
   buttonDeclineTest:{
      color: '#8e8e8e',
      fontWeight: 'normal',
      fontSize: 23,
      margin: "18px",
   },
});

export default Profile;