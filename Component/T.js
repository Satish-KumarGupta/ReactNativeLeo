import React,{useState} from 'react';
import {Text,View,StyleSheet, TextInput}from 'react-native';


const T=()=> {

  const [name,SetName]=useState('');
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please write your name
            </Text>

            <TextInput style={styles.input}
            placeholder='enter name' 
            onChangeText={(value) => SetName(value)}
            keyboardType='numeric'
            />
            <Text style={styles.text}> your namr is:{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      alignItems:"center",
    },
    input:{
        borderWidth:1,
        width:150,
        alignItems:"center",
        justifyContent:"center",
      },

    text: {
      color: '#000000',
      fontSize: 45,
      fontStyle: 'italic',
      margin: 10,
      alignItems:"center"
    },
  });
  
export default T;