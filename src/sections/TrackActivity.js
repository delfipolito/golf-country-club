import React from 'react'
import styled from 'styled-components'
import henrry from '../assets/henrry.jpeg'
import telegram from '../assets/telegram.svg'
import discord from '../assets/discord.svg'
import { H3, H6, BodyL, Container } from '../styles/texts'

const TrackActivity = () => (
  <TrackActivitySection>
    <Henrry>
      <div>
        <H3>Henrry Smith </H3>
        <H6>Green lounge</H6>
        <br />
        <br />
        <BodyL>
          Nuestro resto-bar abrió sus puertas recientemente para ser el lugar de
          encuentro de jugadores, socios y todo aquel que quiera disfrutar del
          lugar. After golf, peñas, almuerzos en familia, tragos con amigos.
          Abierto de miércoles a domingo, ofrece variedad de platos y bebidas a
          muy bajo costo. <br />
          <br />
          Con reserva previa (prioridad para socios) al número +54 3446 442701
        </BodyL>
      </div>
    </Henrry>

    <img src={henrry} alt="henrry smith" />
  </TrackActivitySection>
)

const TrackActivitySection = styled.section`
  background: linear-gradient(#15625b, #106637);
  box-sizing: border-box;
  height: auto;
  min-height: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
  gap: 0px;

  img {
    object-fit: contain;
    max-width: 800px;
    margin-right: 0;
    @media only screen and (max-width: 700px) {
      max-width: 90vw;
    }
  }
  @media only screen and (max-width: 700px) {
    min-height: 580px;
  }
`

const Henrry = styled.div`
  height: 540px;
  width: calc(100vw - 800px);
  box-sizing: border-box;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default TrackActivity
