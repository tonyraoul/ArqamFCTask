import React from 'react'
import styled from "styled-components";

const Elem = styled.div`
  width: 100%;
  min-height: 20px;
  max-width: 1280px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.4);
  display: flex;
  .container {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: row;
    vertical-align: center;
  }
  .avatar {
    background: #CCC;
    width: 30px;
    height: 30px;
    border-radius: 100px;
  }
  .logo {
    max-width: 30px;
    padding: 5px;
  }
  .company-name{
    vertical-align: center;
  }
`

export const Header = () => <Elem>
  <div className='container'>
    <img src='./logo192.png' className='logo' alt='logo'/>
    <h1 className='company-name'>ArqamFC</h1>
    <div className='username'> JOHN DOE </div>
    <div className='avatar' />
  </div>
</Elem>

