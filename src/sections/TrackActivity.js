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
        <br/><br/>
        <BodyL>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </BodyL>
      </div>
    </Henrry>

    <img src={henrry} alt="henrry smith" />
  </TrackActivitySection>
)

const TrackActivitySection = styled.section`
  background: linear-gradient(#15625b, #106637);
  height: auto;
  min-height: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    img {
      max-width: 80vw;
    }
  }
  gap: 0px;

  img {
    object-fit: contain;
    max-width: 800px;
    margin-right: 0;
  }
  @media only screen and (max-width: 700px) {
    min-height: 580px;
  }
`

const Henrry = styled.div`
  height: 540px;
  width: calc(100vw - 800px);
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default TrackActivity
