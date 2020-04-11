import React from 'react';
import styled from "styled-components";
import { Theme } from '../theme';

const Elem = styled.div`
${Theme.shadow}
min-width: 380px;
min-height: 300px;
max-width: 400px;
margin: 10px;
.card-title {
   background-color: #FF5252;
   color: white;
   padding: 5px;
 }
`

interface CardProps {
 children?: React.ReactNode,
 title: string
}

export const Card = ({children,  title}: CardProps) => <Elem>
  <div className='card-title'>
    <h2>{title}</h2>
  </div>
    <div className='card-body'>
      {children}
    </div>
</Elem>
