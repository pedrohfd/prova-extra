import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.TouchableOpacity`
  height: 223px;
  width: 350px;
  background: ${colors.card};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const NameArea = styled.View`
  right: 100px;
`

export const Brand = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const Type = styled.Text`
  font-size: 20px;
  font-weight: 200;
`

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250px;
  height: 100px;
`

export const Value = styled.Text`
  margin-left: 180px;
  font-weight: bold;
  font-size: 24px;
`
