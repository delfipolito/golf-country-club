import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import heroImage from '../assets/hero2.jpg'
import { H1, BodyL, Button, Container } from '../styles/texts'

const Hero = () => <HeroSection />

const HeroSection = styled.section`
  width: 100%;
  height: calc(90vh + 40px);
  box-sizing: border-box;
  margin: 0;
  padding: 50px 8.5%;
  background: linear-gradient(135deg, #106637,#15625b);
  text-align: center;
  background-image: url(${heroImage});
  background-position: bottom;
  background-size: cover;
  margin-top: -64px;
  position: relative;
  z-index: 3;
  padding-bottom: calc(50px + 6vw);
  clip-path: polygon(0 calc(100% - 6vw), 100% 100%, 100% 0, 0 0);
`

export default Hero
