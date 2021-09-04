import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
`

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-left: 24px;
`

export const BigWord = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const SmallWord = styled.Text`
  margin-left: 6px;
  margin-bottom: 1.2px;
  font-size: 16px;
`

export const SignInButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${colors.button};
  border-radius: 6px;
  height: 30px;
  width: 60px;
  justify-content: center;
  align-items: center;
`

export const SignInButtonText = styled.Text``

export const SignUpButton = styled.TouchableOpacity``

export const SignUpButtonText = styled.Text``
