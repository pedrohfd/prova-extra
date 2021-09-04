import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  align-items: center;
`

export const Header = styled.View``

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 50px;
`

export const BigWord = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: ${fonts.bold};
`

export const SmallWord = styled.Text`
  margin-left: 6px;
  margin-bottom: 1.5px;
  font-size: 23px;
  font-family: ${fonts.regular};
`

export const List = styled.ScrollView``

export const ContainerList = styled.View`
  padding-bottom: 50px;
`
