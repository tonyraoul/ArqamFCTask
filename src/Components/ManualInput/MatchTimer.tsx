import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import addZero from 'add-zero'
import { ApplicationState } from '../../Reducers'
import { ITogglesState } from '../../Reducers/Toggles'

export const MatchTimer = () => {

  const { AccMinutes, StartTime } = useSelector<ApplicationState, ITogglesState>(state => state.Toggles)
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
  return <div>
    {`${minutes}:${seconds}`} 
  </div>
}