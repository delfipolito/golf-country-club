import React from 'react'
import styled from 'styled-components'
import { BodyL, H5, Container } from '../styles/texts'
import balancer from '../assets/trusted/Balancer.svg'
import dxdao from '../assets/trusted/DXdao.svg'
import paraswap from '../assets/trusted/Paraswap.svg'
import descentraland from '../assets/trusted/Descentraland.svg'
import tw from '../assets/trusted/Trustwallet.svg'

const TrustedBy = () => (
  <TrustedBySection>
    <Container>
      <Box>
        <H5>BIENVENIDO AL GOLF COUNTRY CLUB</H5>
        <BodyL className="subtitle">
          El club de la zona oeste, donde disfrutar de la naturaleza es nuestro
          principal objetivo.
        </BodyL>
      </Box>
    </Container>
  </TrustedBySection>
)

const TrustedBySection = styled.section`
  background: linear-gradient(#15625b, #106637);
  height: auto;
  @media only screen and (max-width: 700px) {
    padding: 60px 0 0 0;
  }
`

const Box = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 70px 0 70px 0;
  text-align: center;
  p {
    color: white;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    @media only screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`

export default TrustedBy
