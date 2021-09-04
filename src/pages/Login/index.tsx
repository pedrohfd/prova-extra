import { useNavigation } from '@react-navigation/native'
import React from 'react'

import {
  BigWord,
  Container,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText,
  SmallWord,
  TitleArea,
} from './styles'

const Login = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <TitleArea>
        <BigWord>EXOTIC</BigWord>
        <SmallWord>CARS</SmallWord>
      </TitleArea>

      <SignUpButton onPress={() => navigation.navigate('Home')}>
        <SignUpButtonText>Sign Up</SignUpButtonText>
      </SignUpButton>

      <SignInButton onPress={() => navigation.navigate('Home')}>
        <SignInButtonText>Sign In</SignInButtonText>
      </SignInButton>
    </Container>
  )
}

export default Login
