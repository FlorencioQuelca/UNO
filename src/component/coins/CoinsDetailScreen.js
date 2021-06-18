import React, {Component} from 'react';
import { View,Text,Pressable} from 'react-native';



class CoinsDetailSreen extends Component{
    render(){

    return (
        <View>
            <Text>
                coins deteaill screenn 99
            </Text>
            <Pressable   onPress = {this.handlePress}>
                    <Text>
                        hola soy nuevo boton
                    </Text>
            </Pressable>

        </View>
    );
 }
}



export default CoinsDetailSreen; 