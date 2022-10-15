import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Home from '../screens/Home'
import Details from '../screens/Details'
import Add from '../screens/Add'
import Header from './Header'
import { Button } from 'react-native'
import { HeaderBackground } from '@react-navigation/elements'
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()


const MainStack = () => {


  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerBackground: ()=>(
            <HeaderBackground style={{backgroundColor:'rgb(112, 99, 255)'}}></HeaderBackground>
          ),
        }}
      >

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerRight: ()=>(
              <Header></Header>
            )
          }}
        >
        </Stack.Screen>

        <Stack.Screen
          name='Details'
          component={Details}
        >
        </Stack.Screen>

        <Stack.Screen
          name='Add'
          component={Add}
        >
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStack
