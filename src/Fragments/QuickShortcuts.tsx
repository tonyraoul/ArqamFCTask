import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.div`
  padding: 10px;
  font-family: IBM Plex Sans;
  li {
    margin: 5px;
  }
  li:before {
    content: '-';
  }
`

const Emphasize = styled.div`
  border: 1px solid black;
  padding: 2px;
  display: inline-block;
`

export const QuickShortcuts = () => <Paragraph>
  <ul>
    <li> Press on <Emphasize>E</Emphasize> for PASS </li>
    <li> Press on <Emphasize>S</Emphasize> for SHOT </li>
    <li> Press on <Emphasize>W</Emphasize> for NEUTRAL </li>
    <li> Press on <Emphasize>SPACE</Emphasize> to switch teams </li>
    <li> Press on <Emphasize>?</Emphasize> to display all shortcuts </li>
  </ul>
</Paragraph>
