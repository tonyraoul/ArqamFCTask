import React from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'

const Elem = styled.div`
  ${Theme.shadow}
  width: 100%;
  max-width: 1080px;
  height: 300px;
  background: #ccc;
  border-radius: 12px;
  color: white;
  font-family: IBM Plex Mono;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-content: center;
  p {
    margin: auto;
  }

`

export const VideoPlayer = () => <Elem>
  <p>
    Match Player placeholder.<br/>
    Not implemented
  </p>
</Elem>

