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
        <H5>CANCHA DE PADEL</H5>
        <BodyL className="subtitle">
          En nuestro club contamos con una cancha de pádel de última generación
          para que nuestros miembros disfruten de este emocionante deporte.
          Además, ofrecemos clases particulares para aquellos que desean mejorar
          su técnica o aprender a jugar desde cero.<br/>Nuestro equipo de
          entrenadores profesionales y altamente capacitados se asegurará de que
          tengas una experiencia divertida y educativa en cada clase. Ya sea que
          seas un principiante o un jugador experimentado, nuestros entrenadores
          personalizarán las clases para satisfacer tus necesidades y ayudarte a
          alcanzar tus metas. <br/><br/>También ofrecemos alquiler de la cancha para
          aquellos que desean practicar o jugar con amigos.
        </BodyL>
        <div className="button-strong-div">
          <a
            className="button-strong"
            target="_blank"
            href="https://golfcountryclub-cancha-de-padel.youcanbook.me/"
          >
            <span>Reserva tu turno</span>
          </a>
        </div>
      </Box>
    </Container>
  </TrustedBySection>
)

const TrustedBySection = styled.section`
  background: white;
  height: auto;
  @media only screen and (max-width: 700px) {
    padding: 60px 0 0 0;
  }
  .button-strong-div {
    display: flex;

    justify-content: center;
  }
  a {
    background: linear-gradient(139deg, #15625b, #107840);
    padding: 10px 30px;
    border-radius: 4px;
    color: white;
    &:hover {
      background: linear-gradient(139deg, #0a3935, #107840);
    }
  }
`

const Box = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 70px 0 70px 0;
  text-align: center;
  p,
  h5 {
    color: #1b1f24;
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
