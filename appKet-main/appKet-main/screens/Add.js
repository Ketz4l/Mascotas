import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import * as ImagePicker from "expo-image-picker";

const Add = ({navigation}) => {
  const [name, setName] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [edad, setEdad] = React.useState(0);
  const [image, setImage] = React.useState(null);

  const openImagePicker = async () => {
    let state = await ImagePicker.requestCameraPermissionsAsync();
    if (state.granted === false) {
      alert("Conceda permiso para acceder a la cámara");
    }
    let pickedImage = await ImagePicker.launchImageLibraryAsync();
    if (pickedImage.cancelled === true) {
      return;
    }
    setImage({ localUri: pickedImage.uri });
  };

  return (
    <View style={s.containerCol}>
      <View style={s.containerRow}>
        <Text style={s.label}>Nombre de la mascota: </Text>
        <TextInput
          style={s.inputs}
          placeholder="Ej. Bolita"
          onChangeText={(nameInput) => setName(nameInput)}
          defaultValue={name}
        />
      </View>
      <View style={s.containerRow}>
        <Text style={s.label}>Raza: </Text>
        <TextInput
          style={s.inputs}
          placeholder="Ej. Bulldog"
          onChangeText={(breedInput) => setBreed(breedInput)}
          defaultValue={breed}
        />
      </View>
      <View style={s.containerRow}>
        <Text style={s.label}>Edad: </Text>
        <TextInput
          style={s.inputs}
          keyboardType="numeric"
          placeholder="Ej. 5"
          onChangeText={(edadInput) => setEdad(edadInput)}
          defaultValue={edad}
        />
      </View>

      <View style={s.containerRow}>
        <Text style={s.label}>Imagen: </Text>
        <TouchableOpacity style={s.btn} onPress={openImagePicker}>
          <Text>Foto</Text>
        </TouchableOpacity>
        {image !== null ? (
          <Image
            source={{ uri: image.localUri }}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
        ) : (
          <View />
        )}
      </View>

      <View style={s.containerRowBtns}>
        <TouchableOpacity 
          style={s.btn}
          onPress={()=>alert('Este botón debe vaciar el Forms')}
        >
          <Text>Subir mascota</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={s.btn}
          onPress={()=>{
            setImage(null)
            setBreed("")
            setEdad(0)
            setName("")
            navigation.navigate('Add')
          }}
        >
          <Text>Resetear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const s = StyleSheet.create({
  containerCol: {
    marginTop: 15,
    marginLeft: 5,
    flexDirection: "column",
  },
  containerRow: {
    marginHorizontal: 15,
    flexDirection: "row",
  },
  label: {
    fontFamily: "monospace",
    fontSize: 17,
    color: "rgb(255, 102, 184)",
  },
  inputs: {
    top: -10,
    height: 40,
    width: 60,
  },
  containerRowBtns: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "rgb(255, 166, 213)",
    borderWidth: 3,
    borderColor: "rgb(255, 102, 184)",
    padding: 10,
    borderRadius: 20,
  },
});
