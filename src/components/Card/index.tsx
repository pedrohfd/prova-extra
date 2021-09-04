import React, { useState } from 'react'
import { CarsProps } from '../../@types/CarsProps'
import { Brand, Container, Image, NameArea, Type, Value } from './styles'

const Card = (data: CarsProps) => {
  return (
    <Container>
      <NameArea>
        <Brand>{data.data.brand}</Brand>
        <Type>{data.data.type}</Type>
      </NameArea>
      <Image
        source={{
          uri: data.data.image,
        }}
      />
      <Value>${data.data.value}/day</Value>
    </Container>
  )
}

export default Card
