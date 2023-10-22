import React from 'react'
import BoxesTop from './BoxesTop'
import BoxesBottom from './BoxesBottom'
import { Container } from 'react-bootstrap'

const RightSide = () => {
  return (
    <Container fluid>
      <BoxesTop/>
      <BoxesBottom/>
    </Container>
  )
}

export default RightSide
