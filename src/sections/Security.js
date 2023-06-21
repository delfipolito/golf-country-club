import React from 'react'
import styled from 'styled-components'
import { Hxl, H6, H5, BodyL, Container } from '../styles/texts'
import Trail from '../components/Trail'
import padel from '../assets/padel-green.png'
import futbol from '../assets/futbol-green.png'
import golf from '../assets/golf-green.png'

const Securyty = () => {
  return (
    <SecurytySection>
      <Container>
        <H5>Pasión por el deporte desde temprana edad</H5>
        <BodyL>
          En el Golf Country Club nos preocupamos por el desarrollo integral de
          cada miembro de la familia, es por eso que ofrecemos una forma
          divertida y educativa de introducir a los niños en el mundo del
          deporte. Contamos con escuelas de padel, golf y fútbol para niños
          entre 5 y 12 años.
        </BodyL>
        <Items>
          <div>
            <img src={golf} alt="golf infantil" />
            <H6>Golf</H6>
            <BodyL>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BodyL>
          </div>
          <div>
            <img src={futbol} alt="futbol  infantil" />
            <H6>Futbol</H6>
            <BodyL>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BodyL>
          </div>
          <div>
            <img src={padel} alt="padel infantil" />
            <H6>Padel</H6>
            <BodyL>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BodyL>
          </div>
        </Items>
      </Container>
    </SecurytySection>
  )
}

const Items = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 0;
  margin-left: auto;
  gap: 30px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 300px;
    img {
      margin-bottom: 50px;
    }
    p {
      max-width: 280px;
    }
  }
  img {
    height: 100px;
  }
`

const SecurytySection = styled.section`
  padding: 150px 0 244px 0;
  background: white;
  color: #1b1f24;
  text-align: center;
  @media only screen and (max-width: 700px) {
    padding: 0;
  }
  h5, h6, p {
    text-align: center;
    color: #1b1f24;
  }
`

export default Securyty
