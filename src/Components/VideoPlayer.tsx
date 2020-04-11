import React from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'

const Elem = styled.div`
  ${Theme.shadow}
  width: 100%;
  max-width: 1080px;
  height: 300px;
  margin: 10px;
  background: #ccc;
`

export const VideoPlayer = () => <Elem />

