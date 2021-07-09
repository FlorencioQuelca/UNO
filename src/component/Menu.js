import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PersonaNatural from './PersonaNatural';
import {createStackNavigator} from '@react-navigation/stack';

const Menu = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.texto}> soy una ? </Text>
      </View>

      <View style={styles.ViewTouchable}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Persona Natural')}>
          <Text style={styles.textoButton}> Persona Natural</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ViewTouchable}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Empresa')}>
          <Text style={styles.textoButton}> Empresa/ Persona Juridica </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ViewTouchable}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Sociedad Accidental')}>
          <Text style={styles.textoButton}> Sociedad Accidental</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#BDECB6',//'#00973A',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FDFD96',
    padding: 20,
    borderRadius: 8,
  },
  textView: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    //justifyContent: "center",
  },
  texto: {
    fontSize: 25,
    color: '#D9111C',
    paddingBottom: 50,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  textoButton: {
    fontSize: 18,
    color: '#184c9b',
    fontWeight: 'bold',
  },
  ViewTouchable: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export default Menu;
