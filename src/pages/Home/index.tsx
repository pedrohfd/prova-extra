import React from 'react'
import {
  BigWord,
  Container,
  ContainerList,
  List,
  SmallWord,
  TitleArea,
} from './styles'
import data from '../../../cars.json'
import Card from '../../components/Card'

const Home = () => {
  return (
    <Container>
      <TitleArea>
        <BigWord>EXOTIC</BigWord>
        <SmallWord>CARS</SmallWord>
      </TitleArea>

      <List showsVerticalScrollIndicator={false}>
        <ContainerList>
          {data.map((item: any) => (
            <Card data={item} key={item.type} />
          ))}
        </ContainerList>
      </List>
    </Container>
  )
}

export default Home
