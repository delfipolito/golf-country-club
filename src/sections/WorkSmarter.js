import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import heroImage from '../assets/bg-golf.jpg'
import { H1, BodyL, Button, Container } from '../styles/texts'

const Hero = () => <HeroSection />

const HeroSection = styled.section`
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 50px 8.5%;
  text-align: center;
  background-image: url(${heroImage});
  background-position: top;
  background-size: cover;
  margin-top: -64px;
  position: relative;
  z-index: 3;
  padding-bottom: calc(50px + 6vw);
`

export default Hero
