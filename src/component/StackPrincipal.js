import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import MenuRegistro from './Menu';

const Stack = createStackNavigator();


const StackPrincipal = () =>{
return (
    <Stack.Navigator>  
     <Stack.Screen name = "login" 
                    component = {LoginScreen}
      />
     <Stack.Screen name = "MenuRegistro"
                    component = {MenuRegistro}
      />
    
    

    </Stack.Navigator>
    );

}
export default StackPrincipal;