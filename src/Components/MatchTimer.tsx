import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import addZero from 'add-zero'
import { ApplicationState } from '../Reducers'
import { TogglesState } from '../Reducers/Toggles'
import styled from 'styled-components'

const Elem = styled.div`
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  text-align: end;
  color: #000000;
`


export const MatchTimer = () => {

  const { AccMinutes, StartTime } = useSelector<ApplicationState, TogglesState>(state => state.Toggles)
  const [timeDiff, setTimeDiff] = useState(0)
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  useEffect(() => {
      // Every 100ms to avoid glitches and sync with server when implemented
      const timeoutHandler = setInterval(() => setTimeDiff(Date.now() - StartTime! + AccMinutes), 100)
      return () => {
          clearInterval(timeoutHandler)
      }
  }, [])
  useEffect(() => {
   const [_minutes, _seconds] = [timeDiff/60000, timeDiff/1000 % 60].map(n => addZero(Math.floor(n)))
   setMinutes(_minutes)
   setSeconds(_seconds)
  }, [timeDiff])
  return <Elem>
    {`${minutes}:${seconds}`} 
  </Elem>
}