import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {Component} from  'react';
import {  View,Text, Pressable, StyleSheet} from 'react-native';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

import Http from '../../libs/http'

class CoinsScreen extends Component{
    
    componentDidMount = async () =>{
            const coins = await Http.instance.get("https://api.coinlore.net/api/lickers/");
            console.log("coins",coins);
            const empresas = await Http.instance.get("http://localhost:8000/api/empresas");
            console.log("Empresas",empresa);
    };


    handlePress = ()=>{
        console.log("got to detail", this.props)
        this.props.navigation.navigate('CoinsDetail')
    }
  
    render(){
        return (
            <View style = {styles.container}>
              <Text style = {styles.btnText} > Mis Datos Personales son: </Text>

              <Text style = {styles.text1}> Nombre: Florencio </Text>
              <Text style = {styles.text1}> Apellidos: Quelca Mamani </Text>
              
              <Text style = {styles.text1}> Edad: 30 años </Text>
              <Text style = {styles.text1}> Carrera:  Diplomado en Aplicaciones Moviles </Text>
              <Text style = {styles.text1}> Ucatec PostGrado2021</Text>
              
              
                <Pressable style = {styles.btn} onPress = {this.handlePress}>
                     <Text style = {styles.btnText} >BIENVENIDO
                     </Text>
                </Pressable>

               


            </View>
        );
    }

  
} 
const styles = StyleSheet.create({
        
    container: {
            flex:1,
            backgroundColor:"orange",
            alignItems:"center"

    },
    btn: {
        padding:8,
        backgroundColor:"orange",
        borderRadius:8,
        margin:16,
        
    },
    btnText:{
        color:"red",
        fontSize:25
    },
    text1:{
        color:"#004c6d",
        fontSize: 20,
        padding:20,
       


    }


});
export default CoinsScreen;