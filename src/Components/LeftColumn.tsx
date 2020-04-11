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
`
export default () => <Container>
  <Section>
    <VideoPlayer />
  </Section>
    <Section>
      <Card title='History'>
      </Card>
    </Section>
</Container>
