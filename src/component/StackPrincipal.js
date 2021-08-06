import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import MenuRegistro from './Menu';
import PersonaNatural from './PersonaNatural';
import Empresa from './Empresa';
import SociedadAccidental from './SociedadAccidental';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import Detalle from './Detalle';


const Stack = createStackNavigator();


const StackPrincipal = () =>{
return (
    <Stack.Navigator>  
        <Stack.Screen name = "Bienvenido" 
                   component = {Pantalla1}
       />
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
    

    <Stack.Screen name = "Proyectos Vigentes - E.SA" 
                   component = {Pantalla2}
       />
    <Stack.Screen name = "Proyectos Vigentes - PN" 
                   component = {Pantalla2}
       />
    <Stack.Screen name = "Detalle" 
                   component = {Detalle}
       />

    </Stack.Navigator>
    );

}


export default StackPrincipal;