import React from 'react'
import {VideoPlayer} from './VideoPlayer'
import styled from 'styled-components'
import {Card} from './Card'
import { History } from './History'
import { MatchTimer } from './MatchTimer'

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
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;
text-trasform: uppercase;
`
const SubTitle = styled.h5`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 23px;
color: #757575;
text-trasform: uppercase;
`

const ClockSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: black;
`
const HSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftColumn = () => <Container>
  <Section>
    <VideoPlayer />
  </Section>
  <Section>
    <ClockSection>
      <HSection style={{flex: 4}}>
        <Title>Liverpool FC vs Totenham FC</Title>
        <SubTitle>Premium League</SubTitle>
      </HSection>
      <HSection style={{flex: 1}}>
        <MatchTimer />
      </HSection>
    </ClockSection>
  </Section>
  <Section>
    <Card title='History'>
      <History />
    </Card>
  </Section>
</Container>
