import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import React from 'react'
import Routes from './src/routes'

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_700Bold,
} from '@expo-google-fonts/jost'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}
