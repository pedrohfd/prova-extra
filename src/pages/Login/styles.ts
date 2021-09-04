import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const BigWord = styled.Text`
  font-size: 28px;
  font-weight: bold;
`

export const SmallWord = styled.Text`
  margin-left: 6px;
  margin-bottom: 1.5px;
  font-size: 23px;
`

export const SignInButton = styled.TouchableOpacity`
  background: ${colors.button};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  margin-top: 16px;
`

export const SignInButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`

export const SignUpButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${colors.button};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  margin-top: 24px;
`

export const SignUpButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.button};
`
