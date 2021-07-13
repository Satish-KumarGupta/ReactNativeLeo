import React,{ useState} from 'react'
import {StyleSheet,View,Button,Text} from 'react-native'
  
export default function Style() {
    const [name, setName] = useState('Style Test')

    const onClickHandler=()=>{
        setName('styles text is done')
    }
    
    return (
        <View style={{  
            width:"100%",
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:3,
            borderColor:"red"
        }}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.button}>
                <Button title='update stat' onPress={onClickHandler}></Button>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
  
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform:"upperCase",

},
button:{
    width:150,
    height:100,
   
},
});