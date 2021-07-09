import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import MenuRegistro from './Menu';
import PersonaNatural from './PersonaNatural';
import Empresa from './Empresa';
import SociedadAccidental from './SociedadAccidental';

const Stack = createStackNavigator();


const StackPrincipal = () =>{
return (
    <Stack.Navigator>  
     <Stack.Screen name = "F.P.S." 
                   component = {LoginScreen}
      />
     <Stack.Screen name = "Menu Registro"
                   component = {MenuRegistro}
      />
      <Stack.Screen name = "Persona Natural"
                   component = {PersonaNatural}
      />
         <Stack.Screen name = "Empresa"
                   component = {Empresa}
      />
          <Stack.Screen name = "Sociedad Accidental"
                   component = {SociedadAccidental}
      />
    
    

    </Stack.Navigator>
    );

}
export default StackPrincipal;