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
    <li> Press on <Emphasize>Space</Emphasize> to switch teams </li>
    <li> Press on <Emphasize>1, 2, 3</Emphasize> to toggle Body-part</li>
    <li> Press on <Emphasize>Enter</Emphasize> to submit Event </li>
    <li> Press on <Emphasize>A</Emphasize> Add extra (Areal-win)</li>
    <li> Press on <Emphasize>B</Emphasize> Add extra (Back-wheel)</li>
    <li> Press on <Emphasize>ESC</Emphasize> to reset state</li>
  </ul>
</Paragraph>
