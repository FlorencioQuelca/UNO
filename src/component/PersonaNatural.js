import React from 'react'
import {Button,ScrollView,TextInput,View,StyleSheet} from 'react-native';

const  PersonaNatural = () => {
return (
    <ScrollView style={styles.container}>

        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" ingrese su numero completo de CI  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Apellido Paterno  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Apellido Materno " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Nombres  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Fecha de Nacimiento " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Numero de celular  " />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" telefono Fijo" />
        </View>
        
        <View style={styles.inputGroup}>
            <TextInput
                placeholder="Correo Electronico" />
        </View>
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" Direccion Domiciliaria" />
        </View>
       
        <View style={styles.inputGroup}>
            <TextInput
                placeholder=" genero " />
        </View>


        <View style = {styles.btn}>
                <Button 
                title = " Registrarse " 
                
                />
            </View>
    </ScrollView>
);
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

export default PersonaNatural;