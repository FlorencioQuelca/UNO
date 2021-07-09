import {forNoAnimation} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React,{useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator, FlatList
} from 'react-native';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';

import Http from '../libs/http';

const URL  ="http://localhost:8000/api/login";
//import MenuRegistro from './Menu'

const LoginScreen = (props) => {

  const [state, setState] = useState({
    nit_ci: '',
    email: '',
    password: '',
  });

  const handlechangeText = (name, value) => {
    setState({...state, [name]: value});
  };
  //registrar un usuario
  const addNewUser = async() => {
    if (state.nit_ci === '') {
      alert('Ingrese su numero numero de ci o carnet o celular');
    } else {
      if (state.email === '') {
        alert('Ingrese su correo electronico');
      } else {
        if (state.password === '') {
          alert('Ingrese su su contraseña');
        } else {

          console.log(state);

          try{
            let req = await fetch(URL,{method:"POST",Header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            Body:JSON.stringify({
              "nit_ci":'5786197574',
              "email":'cvon@example.com',
              "password":123456
            })
            
          })
            let json = await req.json();
          console.log(json);
          
        }catch(e){
         console.log("http POST method error",e);
         trows= Error(e);
        }
      //   Keyboard.dismiss();
        }
      }
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/logofps.png')}
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.btnText}>FPS LA PAZ</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Ci  /  Nit  /  Celular"
          onChangeText={value => handlechangeText('nit_ci', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Correo electronico"
          onChangeText={value => handlechangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Password"
          onChangeText={value => handlechangeText('password', value)}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Ingresar " onPress={() => addNewUser()} />
      </View>
      <View style={styles.btn}>
        <Button
          title=" registrarse "
          onPress={() => props.navigation.navigate('Menu Registro')}
        />
      </View>
      <View style={styles.btn}>
        <Button title=" contáctanos  " />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  center: {
    padding: 5,
    // display: "flex",
    alignItems: 'center',
    // textAlign: "center",
    //justifyContent: "center",
    resizeMode: 'center',
  },
  container: {
    flex: 1,
    padding: 30,
  },
  btn: {
    padding: 1,
    //backgroundColor:"orange",
    borderRadius: 5,
    margin: 5,
  },
  btnText: {
    color: '#E74C3C',
    fontSize: 20,
  },
  text1: {
    color: '#004c6d',
    fontSize: 35,
    padding: 20,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});
export default LoginScreen;
