import React from 'react';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import {QuickShortcuts} from './Fragments/QuickShortcuts';
import { LeftColumn } from './Components/LeftColumn';
import { ManualInput } from './Components/ManualInput';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  button::-moz-focus-inner {
    border: 0;
  }
  `
interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) =>
    <div className={className}>
      <GlobalStyle />
      <Header />
      <div className='container'>
        <div className='left-column column' >
          <Card title='Quick Shortcuts'>
            <QuickShortcuts />
          </Card>
          <Card title='Manual input'>
            <ManualInput />
          </Card>
        </div>
        <div className='right-column column' />
          <LeftColumn />
      </div>
    </div>

  export default styled(App)`
    .container {
      max-width: 1280px;
      margin: auto;
      padding: 20px;
      display: flex;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .right-column {
      flex: 1;
    }
    .left-column {
      flex: 2;
    }
  `
