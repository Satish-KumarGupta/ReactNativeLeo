import {createStackNavigator} from 'react-navigation-stack'
import About from './Screen/About';

const Screens={
    About:{
        screen:About,
        navigationOptions:{
            title:"About Me"
        }

    }
}
const AboutStack=createStackNavigator(Screen,{
    defaultNavigationOptions:{
        headerTintColor:"#144",
        headerStyle:{
            backgroundColor:"#eee",
            height:60
        }
    }  
});
export default AboutStack;