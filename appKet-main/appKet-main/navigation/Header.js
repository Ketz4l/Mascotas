import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Header = () => {
    const navigation = useNavigation()
  return (
    <AntDesign name='plus' color='black' size={24} onPress={()=>navigation.navigate('Add')}/>
  )
}

export default Header

const styles = StyleSheet.create({})