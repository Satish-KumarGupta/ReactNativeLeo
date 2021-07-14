import React,{useState} from 'react';
import {Text,Button,View,StyleSheet, TextInput, TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback, Pressable}from 'react-native';


const Button1=()=> {

  const [name,SetName]=useState('');
const [submitted,SetSubmitted]=useState(false);

  const onPressHandler=()=>{
        SetSubmitted(!submitted)
  }
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
            {/* <Button  title={submitted ?'clear':'Submit'} onPress={onPressHandler} />  */}

            {/* <TouchableOpacity 
            style={styles.button} 
            onPress={onPressHandler}
            activeOpacity={0.2} 
            
            >

              <Text >  {submitted ?'clear':'Submit'} </Text>
           
            </TouchableOpacity> */}

           {/* <TouchableHighlight
            style={styles.button} 
            onPress={onPressHandler}
            activeOpacity={0.2} 
            underlayColor='#ddddd'
            >

              <Text >  {submitted ?'clear':'Submit'} </Text>
           
            </TouchableHighlight>  */}
          
          {/* <TouchableWithoutFeedback
            style={styles.button} 
            onPress={onPressHandler}
            activeOpacity={0.2} 
            underlayColor='#ddddd'
            >
              <View style={styles.button}>
              <Text style={styles.text}>  {submitted ?'clear':'Submit'} </Text>
              </View>
            </TouchableWithoutFeedback> */}

          <Pressable           
            onPress={onPressHandler}
            // delayLongPress={100}
            hitSlop={{top:10,bottom:10,left:10,right:10}}            
            style={({pressed}) => [
              { backgroundColor : pressed ? '#dddddd' :'white'},
              styles.button
            ]}
          >
              <Text style={styles.text}>  {submitted ?'clear':'Submit'} </Text>

          </Pressable>

            {  submitted?
              <Text style={styles.text}> you are reister as {name}</Text>
              : null
            }

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
        alignItems:"center",
        margin:10,
      },
    button:{
      backgroundColor:"#00ff00",
      padding:2,
      width:100,
      alignItems:"center",
      justifyContent:"center",
    },
    text: {
      color: '#000',
      fontSize: 20,
      fontStyle: 'italic',
      alignItems:"center",

    },
  });
  
export default Button1;