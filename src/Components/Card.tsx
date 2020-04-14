import React from 'react';
import styled from "styled-components";
import { Theme } from '../theme';

const Elem = styled.div`
${Theme.shadow}
min-width: 380px;
min-height: 300px;
max-width: 400px;
margin: 10px 0;
border-radius: 12px;
.card-title {   
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding: 5px;
  border-radius: 12px 12px 0 0 ;
  background: linear-gradient(90deg, #FF0000, #FF7A00, #FF7A00);
 }
`

interface CardProps {
 children?: React.ReactNode;
 title: string;
}

export const Card = ({children,  title}: CardProps) => <Elem>
  <div className='card-title'>
    <h2>{title}</h2>
  </div>
    <div className='card-body'>
      {children}
    </div>
</Elem>
