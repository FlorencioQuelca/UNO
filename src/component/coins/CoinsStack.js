import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';
import CoinsDetailSreen from './CoinsDetailScreen';

const Stack = createStackNavigator();


const CoinsStack = () =>{
return (
    <Stack.Navigator>  
     <Stack.Screen name = "MicroEvaluacion Nº 1" 
                    component = {CoinsScreen}
      />
     <Stack.Screen name = "CoinsDetail"
                    component = {CoinsDetailSreen}
      />
    
    

    </Stack.Navigator>
    );

}
export default CoinsStack;