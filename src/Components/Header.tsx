import React from 'react'
import styled from "styled-components";

const Elem = styled.div`
  width: 100%;
  min-height: 10px;
  font-family: IBM Plex Mono;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.4);
  display: flex;
  margin-bottom: 20px;
  && .container {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    vertical-align: center;
    align-items: center;
    padding: 8px;
  }
  .right-shift {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .avatar {
    background: #CCC;
    width: 30px;
    height: 30px;
    border-radius: 100px;
  }
  .logo-container {
    height: 0;
    .logo {
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
      position: relative;
      bottom: 10px;
      background: white;
      width: 60px;
      padding: 5px;
    }
  }
  .username {
    margin: 10px;
  }
  .company-name{
    vertical-align: center;
    margin: 10px;
    display: flex;
  }
`

export const Header = () => <Elem>
  <div className='container'>
    <div className='logo-container'>
      <img src='./logo192.png' className='logo' alt='logo'/>
    </div>
    <h1 className='company-name'>ArqamFC</h1>
    <div className="right-shift">
      <div className='avatar' />
      <div className='username'> JOHN DOE </div>
    </div>
  </div>
</Elem>

