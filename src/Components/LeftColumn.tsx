import React from 'react'
import {VideoPlayer} from './VideoPlayer'
import styled from 'styled-components'
import {Card} from './Card'

const Container= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`

const Title = styled.h4`
  color: black;
`
const SubTitle = styled.h5`
  color: #757575;
`

const ClockSection = styled.div`
  display: flex;
  flex-direction: row;
`
const HSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default () => <Container>
  <Section>
    <VideoPlayer />
  </Section>
  <Section>
    <ClockSection>
      <HSection>
        <Title>Liverpool FC vs Totenham FC</Title>
        <SubTitle>Premium League</SubTitle>
      </HSection>
      <HSection>
        <Title>45:00</Title>
      </HSection>
    </ClockSection>
  </Section>
  <Section>
    <Card title='History'>
    </Card>
  </Section>
</Container>
