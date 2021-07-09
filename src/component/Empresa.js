import React from 'react'
import {Button,ScrollView,TextInput,View,StyleSheet} from 'react-native';
const  Empresa =() => {

    
    return (
    <ScrollView style={styles.container}>

        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Ingrese su numero de N.I.T. " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Nombre Completo de la Empresa  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Nombre del Representante Legal " />
        </View>
    
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Numero de celular  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Telefono Fijo" />
        </View>
        
        <View style={styles.inputGroup}>
            <TextInput
                placeholder="Correo Electronico" />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Direccion Domiciliaria de la Empresa" />
        </View>
       
        


        <View style = {styles.btn}>
                <Button 
                title = " Registrar " 
                
                />
            </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
      center:{
        padding:5,
      // display: "flex",
        alignItems: "center",
       // textAlign: "center",
        //justifyContent: "center",   
        resizeMode: "center",
      

      },
      container: {
            flex:1,
            padding:30,

    },
    btn: {
        padding:1,
        //backgroundColor:"orange",
        borderRadius:5,
        margin:5,
        
    },
    btnText:{
        color:"#E74C3C",
        fontSize:20,
        
    },
    text1:{
        color:"#004c6d",
        fontSize: 35,
        padding:20,
    },
    inputGroup:{
        flex: 1,
       // padding:0,
        marginBottom:1,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    }


});
export default Empresa;