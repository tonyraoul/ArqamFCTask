import React from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../Reducers'
import { IEvent } from '../Actions'

export const History = () => {
  const entries = useSelector<ApplicationState, IEvent[]>(state => state.Events.Events)
  return <ul>
      {entries?.map(entry => {
        return <div key={entry.id}>{entry.content.type}
        </div>
      }
)}
  </ul>
}