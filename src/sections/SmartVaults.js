import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import smartVaults from '../assets/dron.png'
import { H2, BodyL, Container } from '../styles/texts'

const SmartVaults = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth), {
      passive: true,
    })
  }, [])
  const medium = 700

  return (
    <SmartVaultsSection>
      <SmartVaultsContainer>
        {width >= medium && (
          <Parallax speed={5}>
            <img src={smartVaults} alt="smart vaults" />
          </Parallax>
        )}
        <Box>
          <BodyL>
            El club tiene una rica historia que se remonta a 1959, cuando un
            grupo de golfistas apasionados crearon una comunidad acogedora e
            inclusiva para todos aquellos que quisieran iniciarse en el deporte.
            Hoy en día, nuestro club sigue encarnando ese mismo espíritu de
            camaradería y deportividad.
          </BodyL>

          <BodyL>
            Además de nuestro campo de golf, ofrecemos una amplia variedad de
            deportes y actividades para nuestros miembros, desde fútbol, padel,
            basquet y natación hasta yoga y gimnasia funcional.
          </BodyL>

          <BodyL>
            En el Golf Country Club estamos comprometidos a brindar a nuestros
            miembros una experiencia única, donde las familias salen de su
            rutina y obligaciones, para disfrutar, divertirse, descansar y
            pasarla bien. Te invitamos a venir y descubrir todo lo que nuestro
            club tiene para ofrecerte.
          </BodyL>
        </Box>
        {width < medium && <img src={smartVaults} alt="smart vaults" />}
      </SmartVaultsContainer>
    </SmartVaultsSection>
  )
}

const SmartVaultsSection = styled.section`
  padding-top: 100px;
  box-sizing: border-box;
  height: auto;
  min-height: 950px;

  background: conic-gradient(
    at 27% 99%,
    #121418 0deg,
    #121418 81deg,
    #fff 81deg,
    #fff 281deg,
    #121418 270deg
  );
  @media only screen and (max-width: 700px) {
    background: conic-gradient(
      at 27% 75%,
      #121418 0deg,
      #121418 70deg,
      #fff 70deg,
      #fff 284deg,
      #121418 270deg
    );
  }
`

const SmartVaultsContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
  img {
    margin-top: 30px;
    margin-right: 50px;
    max-width: 550px;
    @media only screen and (max-width: 800px) {
      margin: 100px auto 0 auto;
      max-width: 100vw;
      margin-left: -5%;
    }
  }
`

const Box = styled.div`
  width: 588px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    h2 {
      margin: 30px auto;
    }
    p {
      max-width: 328px;
      margin: auto;
  }
`

export default SmartVaults
