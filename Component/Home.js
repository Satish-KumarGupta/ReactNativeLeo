import React from 'react';
import { Image,Dimensions,View,StyleSheet,Text} from 'react-native';
export default function Home() {
    return (
        <View style={{    background:"#009387",flex:1}}>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="stretch"/>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

const {height}=Dimensions.get("screen");
//const height_logo = height*0.28;

const styles = StyleSheet.create({
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
//        backgroundColor:"#009387",
    },
    footer:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"grey",
        borderTopLeftRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
        borderTopRightRadius:30,
    },
    logo:{
        height:160,
        width:160,
        borderRedious:10,
    },
    tiltle:{

    },
    button:{

    },
    signIn:{

    },
    textSign:{

    },
    
});