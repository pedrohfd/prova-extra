import React from 'react'
import {
  Container,
  TitleArea,
  BigWord,
  SmallWord,
  SignUpButton,
  SignUpButtonText,
  SignInButton,
  SignInButtonText,
} from './styles'

const Header = () => {
  return (
    <Container>
      <TitleArea>
        <BigWord>EXOTIC</BigWord>
        <SmallWord>CARS</SmallWord>
      </TitleArea>

      <SignUpButton>
        <SignUpButtonText>Sign up</SignUpButtonText>
      </SignUpButton>

      <SignInButton>
        <SignInButtonText>Sign In</SignInButtonText>
      </SignInButton>
    </Container>
  )
}

export default Header
