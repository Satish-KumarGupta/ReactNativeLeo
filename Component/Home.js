
import React,{useRef} from 'react'
import {Text,Animated,View,Button,SafeAreaView,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import { block } from 'react-native-reanimated';
import { linear } from 'react-native/Libraries/Animated/src/Easing';
import RNAnimatedBorder from "react-native-animated-border"
import Blink from './Blink';
borderWidth: Number;
firstColor: String;
secondColor: String;
borderColor: String;
padding: Number;
margin: Number;
elevation: Number;
export default function Home() {

  const fadeAnimation = useRef(new Animated.Value(0)).current;

const FadeOut=()=>{
  Animated.timing(fadeAnimation,{
    toValue: 0,
    durations:3000
  }).start();
};

const FadeIn=()=>{
  Animated.timing(fadeAnimation,{
    toValue: 1,
    durations:5000
  }).start();
};

  return (
    <SafeAreaView style={styles.container}>
  <TouchableOpacity>
      <RNAnimatedBorder
        firstColor="green"
        secondColor="blue"
        borderWidth={7}
  

       
      >
        <Button style={{
        firstColor:"green",
        borderWidth:7,
        borderRadius:22,
        elevation:8,
        margin:5
}}
          onPress={() => console.log("I love RNAnimatedBorder!")}
          title="press me"
        />
      </RNAnimatedBorder>
    </TouchableOpacity>

      <TouchableOpacity>
        <Animated.View  >
        <Blink durations={100000} repeat_count={3}>    
        
        <Text style={[styles.fadingContainer,{opacity:fadeAnimation}]}>
            fado
        </Text>
        </Blink>      

        </Animated.View>
        
      </TouchableOpacity>
      
      <View style={styles.buttonRow}>
        <Button title="Fade in " onPress={FadeIn} /> 
        <Button title="fade out" onPress={FadeOut} />     
    </View>

    </SafeAreaView> 

 )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  fadingContainer: {
    bottom:0,
    right:-100,
    padding: 20,
    backgroundColor: "grey",
    display:"inline-block",
    borderWidth:15,
    borderColor:"green",
    position:"relative",
    padding :"15,30",
    "box-shadow":"0 0 10 #2196f3",
    background:"linear-gradient(270deg,transparent,#2196f3)",
  },

  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});