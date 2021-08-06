import React from 'react'
import {Button,ScrollView,TextInput,View,StyleSheet,Image} from 'react-native';

const  Pantalla1 = (props) => {
return (
    
    <ScrollView style={styles.container}>
        
        <View style={styles.center}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/MARCA_AGUA.png')}
        //  source={require('../assets/logofps.png')}
        />
        
        </View>

       

        <View style = {styles.btn}>
                <Button 
                title = "EMPRESAS, SOCIEDADES ACCIDENTALES" 
                onPress={() => props.navigation.navigate('Proyectos Vigentes - E.SA')}
                />
            </View>
            <View style = {styles.btn}>
                <Button 
                title = "PERSONAS NATURALES" 
                onPress={() => props.navigation.navigate('Proyectos Vigentes - PN')}
                />
            </View>
    </ScrollView>
);
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 280,
        height: 280,
        borderRadius: 100,
      },
      center:{
        padding:5,
        alignItems: "center",
        resizeMode: "center",
      },
      container: {
            flex:1,
            padding:30,
            backgroundColor:"#FFFFFF",
    },
    btn: {
        padding:1,
        borderRadius:5,
        margin:4,
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
        marginBottom:1,
        borderBottomWidth:1,
        borderBottomColor:'#cccccd',
    }
});

export default Pantalla1;