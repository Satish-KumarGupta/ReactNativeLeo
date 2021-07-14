import React,{useState} from 'react';
import {Text,Button,View,StyleSheet, TextInput, TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback, Pressable,Modal}from 'react-native';


const Button1=()=> {

  const [name,SetName]=useState('');
const [submitted,SetSubmitted]=useState(false);
const [showWarning,SetshowWarning]=useState(false)
  const onPressHandler=()=>{
   if(name.length){     SetSubmitted(!submitted)
  }
  else{
    SetshowWarning(true);
  }
}
    return (
        <View style={styles.body}>
          <Modal visible={showWarning} 
            transparent
            onRequestClose={()=>
              SetshowWarning(false)
            }
            animationType='slide'
          >          
            <View style={styles.centered_view}>
              <View style={styles.warning_model}>
                <View style={styles.warning_title}>
                  <Text style={styles.text}>Warning</Text>
                </View>
                
                <View style={styles.warning_body}>
                   <Text>pelease entry the data</Text>
                </View>
                
                <Pressable onPress={()=>SetshowWarning(false)}
                  style={styles.warning_button}
//                  android_ripple={{color:'red'}} not working
                >
                  <Text style={styles.text}> Ok</Text>
                </Pressable>
              </View>
            </View>

          </Modal>
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
      color: '#000000',
      fontSize: 20,
      margin: 10,
      textAlign: 'center',

    },
    centered_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000099'
    },
    warning_model: {
      width: 300,
      height: 300,
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20,
    },
    warning_title:{
      height:50,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"yellow",
      borderRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    warning_body:{
      height: 200,
      alignItems:"center",
      padding:20,
    },
    warning_button:{
      backgroundColor:"#00ffff", 
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
  });
  
export default Button1;