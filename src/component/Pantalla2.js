import React,{Component} from 'react'
import {FlatList,TouchableOpacity,Text,View,StyleSheet,Image} from 'react-native';

const DATA=[{"id":1,"nombreEmpresa":"Gibson Ports","nit":"5868124163","nombreLegal":"Wilhelm Wisozk V","direccion":"3409 Emmie Rest\nMohrtown, MT 19728-8426","fono1":90846161,"fono2":99572525,"email":"lowell61@example.org","departamento":"West Carolyne","observacion":"Consequatur sed repellendus saepe harum. Impedit dignissimos molestiae asperiores eos explicabo. Quia assumenda similique dolores ex. Explicabo placeat ut alias dolorem omnis sunt quisquam."},{"id":2,"nombreEmpresa":"Orn Plains","nit":"5885144522","nombreLegal":"Ms. Heather Hagenes IV","direccion":"84452 Estefania Mountains Apt. 410\nFlatleyshire, HI 39259-6003","fono1":98639864,"fono2":98377105,"email":"lennie.fadel@example.net","departamento":"Rippinfurt","observacion":"Fugiat nesciunt dolor similique ipsum fuga. Et nesciunt nam ipsa. Itaque earum sed occaecati velit nesciunt vero. Minus cupiditate rem corrupti."},{"id":3,"nombreEmpresa":"Marjorie Junction","nit":"5940370280","nombreLegal":"Miss Ellie Green DVM","direccion":"75605 Carlie Manors Apt. 194\nSouth Lindsey, NM 33717-1862","fono1":93750712,"fono2":90664169,"email":"aric62@example.org","departamento":"Helgamouth","observacion":"Nemo omnis dolore totam earum pariatur voluptatibus possimus temporibus. Nisi aspernatur illum et sit et. Totam aspernatur voluptatibus eum est error. Nostrum quos iusto similique."},{"id":4,"nombreEmpresa":"Jon Fords","nit":"5949580437","nombreLegal":"Jacinthe Shields","direccion":"58213 Arianna Branch\nNorth Dariotown, IL 59378-4286","fono1":91156757,"fono2":89734661,"email":"bshanahan@example.net","departamento":"Satterfieldtown","observacion":"Saepe necessitatibus voluptate et delectus. Necessitatibus omnis ut qui maiores enim saepe sit non. Eos quas reprehenderit dolorem est est repellat soluta."},{"id":5,"nombreEmpresa":"Saige Knolls","nit":"5982393447","nombreLegal":"Roel Stroman","direccion":"6019 Trenton Streets\nSouth Lerachester, AZ 15948","fono1":82839612,"fono2":90357665,"email":"julia.olson@example.net","departamento":"Deronmouth","observacion":"Sint debitis et id consequatur dolorem id. Aut et eos harum. Eveniet molestias quod et et. Enim non at mollitia iure qui."}];

const Pantalla2 = (props) => {

    return (
   <View >
        
          <FlatList 
            data={DATA}
            renderItem = {
                ({item}) => (
                        <View >
                        <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Detalle')} >
                        <View>
                          <Text style={styles.title} > {item.nit} </Text>
                         <Text style={styles.description}>  {item.nombreEmpresa} </Text>  
                        </View>
                       

                         </TouchableOpacity>
 
                        </View> 
                    )
            }
            keyExtractor={(item,index)=> index.toString()}
         />
        </View>
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
            //padding:30,
            backgroundColor:"#FFFFFF",
    },
    btn: {
        padding:1,
        borderRadius:5,
        margin:5,
    },
    title:{
        color:"#E74C3C",
        fontSize:25,
    },
    description:{
        color:"#004c6d",
        fontSize: 20,
        padding:5,
    },
    inputGroup:{
        flex: 1,
        marginBottom:1,
        borderBottomWidth:1,
        borderBottomColor:'#cccccd',
    }, button: {
       // flex:1,
        //alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:30
      },
});
export default Pantalla2;