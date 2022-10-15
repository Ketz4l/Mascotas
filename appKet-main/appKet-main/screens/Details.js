import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Details = ({navigation, route}) => {

  const data = route.params

  var msg = (data.edad>8)?'(un poco viejito)':'(Bastante joven)'

  return (
    <View style={s.body}>
      <Text style={s.title}>Bienvenido, esta es la {'\n'}página de <Text style={{fontWeight: 'bold'}}>{data.nombre}</Text></Text>
      <Image
        source={data.srcImg}
        style={s.img}
      />
      <Text style={s.txt}>Tiene {data.edad} años de edad {msg+'\n'}y es de raza: <Text style={{fontWeight: 'bold'}}>{data.raza}</Text></Text>
      <TouchableOpacity style={s.btn} onPress={()=>alert('Este botón haria la petición al back del animal con id: '+data.id)} >
        <Text style={s.btnTxt}>Me lo llevo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details

const s = StyleSheet.create({
  body:{
    alignItems: 'center',
    top:15,
  },
  title:{
    fontFamily: 'monospace',
    fontSize:20,
    textAlign:'center',
    color:"rgb(242, 0, 255)"
  },
  img:{
    margin:20,
    width:300,
    height:300
  },
  txt:{
    fontFamily:'monospace',
    fontSize:15,
    textAlign:'center',
    color:"rgb(242, 0, 255)"
  },
  btn:{
    margin:15,
    padding:10,
    backgroundColor:"rgb(255, 166, 213)",
    borderRadius:10,
    borderColor:"rgb(255, 102, 184)",
    borderWidth:2
  },
  btnTxt:{
    color:"rgb(112, 99, 255)",
    fontSize:20
  }
})