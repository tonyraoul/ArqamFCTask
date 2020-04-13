import React from 'react'
import addZero from 'add-zero'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../Reducers'
import { IEvent } from '../Actions'
import { ITogglesState } from '../Reducers/Toggles'

export const History = () => {
  const entries = useSelector<ApplicationState, IEvent[]>(state => state.Events.Events)
  const { HomeClubName, GuestClubName, AccMinutes, StartTime } = useSelector<ApplicationState, ITogglesState>(state => state.Toggles)
  return <ul>
      {entries?.map(entry => {
        const timeDiff = entry.timestamp - StartTime! + AccMinutes
        const [minutes, seconds] = [timeDiff/60000, timeDiff/1000 % 60].map(n => addZero(Math.floor(n)))
        return <li key={entry.id}>
          <div>{`${minutes}:${seconds}`}</div>
          <div>{entry.content.Club === 'HOME' ? HomeClubName : GuestClubName }</div>
          <div>{entry.content.passShoot}</div>
          {entry.content.type}
        </li>
      }
)}
  </ul>
}