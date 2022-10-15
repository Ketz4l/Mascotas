import { Alert, Button, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Cards = ({ onPress, data }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.container}>
        <Image source={data.srcImg} style={styles.img} />
        <Text style={styles.txt}>
          {data.nombre[0].toUpperCase() + data.nombre.substring(1)}
        </Text>
        <Text style={styles.raza}>Raza: {data.raza}</Text>
        <Text style={styles.edad}>Edad: {data.edad}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  //datos de ejemplo que bien podrian ser tomados de una consulta sql
  const EXAMPLE_DATA = [
    {
      id: 1,
      nombre: "canelito",
      raza: "bulldog",
      edad: 5,
      srcImg: require("../img/canelito.jpg"),
    },
    {
      id: 2,
      nombre: "masudo",
      raza: "gato",
      edad: 3,
      srcImg: require("../img/masudito.jpg"),
    },
    {
      id: 3,
      nombre: "thorin",
      raza: "gato",
      edad: 3,
      srcImg: require("../img/thorin.jpg"),
    },

    //descomentar para probar scrollview

    // {
    //   id: 3,
    //   nombre: "thorin",
    //   raza: "gato",
    //   edad: 3,
    //   srcImg: require("../img/thorin.jpg"),
    // },
    // {
    //   id: 3,
    //   nombre: "thorin",
    //   raza: "gato",
    //   edad: 3,
    //   srcImg: require("../img/thorin.jpg"),
    // },
    // {
    //   id: 3,
    //   nombre: "thorin",
    //   raza: "gato",
    //   edad: 3,
    //   srcImg: require("../img/thorin.jpg"),
    // },
    // {
    //   id: 3,
    //   nombre: "thorin",
    //   raza: "gato",
    //   edad: 3,
    //   srcImg: require("../img/thorin.jpg"),
    // },
    // {
    //   id: 3,
    //   nombre: "thorin",
    //   raza: "gato",
    //   edad: 3,
    //   srcImg: require("../img/thorin.jpg"),
    // },
  ];

  //generamos las tarjetas
  function renderCards() {
    return EXAMPLE_DATA.map((e) => (
      <Cards
        key={e.id}
        data={e}
        //todas apuntan a su visor detallado 
        onPress={() => navigation.navigate("Details", e)}
      />
    ));
  }

  return (
    <ScrollView>
      <View style={{marginTop:10}}>{renderCards()}</View>
    </ScrollView>
  );
};


// const HeaderButtonComponent = (props) => (
//   <HeaderButton
//     IconComponent={AntDesign}
//     iconSize={24}
//     color="black"
//     {...props}
//   />
// )

// Home.navigationOptions = (navData) => {
//   return {
//     headerTitle: 'Home',
//     headerRight: () =>(
//       <HeaderButtonComponent HeaderButtonComponent={HeaderButtonComponent} >
//         <Item
//           title="Nuevo"
//           iconName="plus"
//           onPress={() => navData.navigation.navigate("Add")}
//         />
//       </HeaderButtonComponent>
//     )
//   }
// }

export default Home


const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "rgb(255, 166, 213)",
    borderWidth: 3,
    borderColor: "rgb(255, 102, 184)",
    padding: 10,
    borderRadius: 20,
  },
  img: { 
    width: 70, 
    height: 70,
    borderRadius:10
  },
  txt: {
    color: "white",
    margin: 10,
    fontSize:20,
    fontWeight: "bold"
  },
  container: {
    
    flexDirection: "row",
    justifyContent: "space-between"
  },
  raza:{
    color: 'white',
    margin:10,
    fontFamily: 'monospace',
  },
  edad:{
    color: 'black',
    margin:10,
    fontFamily: 'monospace',
  }
});
