import React from 'react'
import styled from 'styled-components'
import { LinkL } from '../styles/texts'
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <Social>
        <LinkL
          href="https://www.facebook.com/Golfgualeguaychu/"
          target="_blank"
          aria-label="facebook"
        >
          <img src={facebook} alt="facebook" />
        </LinkL>
        <LinkL
          href="https://www.instagram.com/gchucountryclub/"
          target="_blank"
          aria-label="instagram"
        >
          <img src={instagram} alt="instagram" />
        </LinkL>
      </Social>
    </TabsBox>
  )
}
const Social = styled.div`
  display: flex;
`
const TabsBox = styled.div`
  display: ${props => (props.mode === 'large' ? 'flex' : 'block')};
  align-items: center;
  text-align: center;
  a {
    padding: ${props => (props.mode === 'large' ? '0 20px' : '20px 0')};
    display: flex;
    align-items: center;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`

export default Tabs
