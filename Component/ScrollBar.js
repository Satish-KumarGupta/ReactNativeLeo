import React,{useState} from 'react'
import {View,StyleSheet,Text,} from 'react-native'
export default function ScrollBar() {
 
 const [Items,setItems]=useState([
     {key:1,Items:'Item 1'},
     {key:2,Items:'Item 2'},
     {key:3,Items:'Item 3'},
     {key:4,Items:'Item 4'},
 ]) 
    return (
    <View style={styles.body}> 
        <Text style={styles.text}> Item 1</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        alignItems:"stretch",
        justifyContent:"center",
    },
    Item:{}
    text:{
        color:"#red",
        fontSize:35,
        fontStyle:"italic",
        margin:10,
    }

})