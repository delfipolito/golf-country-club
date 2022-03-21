import React from 'react'
import styled from 'styled-components'
import done from '../assets/done.svg'

const Steps = () => (
  <StepsSection>
    <Container>
      <h1>Establish a trustless relationship with your clients</h1>
      <CardsContainer>
        <Card className="violet">
          <h2>1</h2>
          <div>
            <h3>Set terms</h3>
            <p>Create a portfolio with specific conditions</p>
          </div>
        </Card>
        <Card>
          <h2>2</h2>
          <div>
            <h3>Seal the deal</h3>
            <p>Your client agrees by sending assets to the portfolio</p>
          </div>
        </Card>
        <Card>
          <h2>3</h2>
          <div>
            <h3>Put to it work</h3>
            <p>Choose between multiple DeFi strategies</p>
          </div>
        </Card>
        <Card>
          <h2>
            <img src={done} />
          </h2>
          <div>
            <h3>..and done!</h3>
            <p>Collect your fees automatically</p>
          </div>
        </Card>
      </CardsContainer>
    </Container>
  </StepsSection>
)

const StepsSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 0 0 30px 0;
  text-align: right;
`

const Container = styled.div`
  max-width: 1056px;
  margin: auto;
  text-align: right;
  h1 {
    font-family: 'Poppins-Bold';
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
    color: #fcfcfc;
    text-align: left;
    max-width: 833px;
    @media only screen and (max-width: 700px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
      text-align: center;
    }
  }
`

const CardsContainer = styled.div`
  display: grid;
  gap: 17px 17px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 388px;
  justify-items: end;
  @media only screen and (max-width: 700px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 0 20px;
  }
`
const Card = styled.div`
  border-radius: 16px;
  padding: 26px;
  width: 218px;
  @media only screen and (max-width: 700px) {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }
  background: #4e4b66;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0;

  h2 {
    font-family: 'Poppins-Bold';
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.99px;
    text-align: left;
    margin: 0;
    @media only screen and (max-width: 700px) {
      font-size: 60px;
      padding: 20px 30px 30px 30px;
      min-width: 83px;
      text-align: center;
    }
  }
  h3 {
    font-family: 'Poppins-Bold';
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.99px;
    text-align: left;
    margin: 0;
    @media only screen and (max-width: 700px) {
      padding-top: 15px;
    }
  }
  p {
    font-family: 'Poppins-SemiBold';
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    min-height: 84px;
    @media only screen and (max-width: 700px) {
      margin: 5px;
      font-size: 13px;
      line-height: 17px;
      margin-right: 30px;
    }
  }
  &.violet {
    background: #a524ff;
    padding: 30px;
    margin: 0;
    width: 247px;
    @media only screen and (max-width: 700px) {
      width: 100%;
      padding: 0;
    }

    @media only screen and (min-width: 701px) {
      h3 {
        font-size: 28px;
      }
      h2 {
        font-size: 80px;
      }
    }
  }
`

export default Steps