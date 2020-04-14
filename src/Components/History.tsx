import React from 'react'
import addZero from 'add-zero'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../Reducers'
import { EventType } from '../Actions'
import { TogglesState } from '../Reducers/Toggles'
import styled from 'styled-components'

const Time = styled.div`
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #7D7D7D;
  margin: 5px;
`
const EventDescription = styled.div `
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  span {
    margin: 0 5px;
  }
`
const ClubName = styled.span`
color: #FF5252;
`
const UnorderList = styled.ul`
  height: 100%;
  overflow: auto;
  max-height: 300px;
`

export const History = () => {
  const entries = useSelector<ApplicationState, EventType[]>(state => state.Events.Events)
  const { HomeClubName, GuestClubName, AccMinutes, StartTime } = useSelector<ApplicationState, TogglesState>(state => state.Toggles)
  return <UnorderList>
      {[...entries].reverse().map(entry => {
        const timeDiff = entry.timestamp - StartTime! + AccMinutes
        const [minutes, seconds] = [timeDiff/60000, timeDiff/1000 % 60].map(n => addZero(Math.floor(n)))
        return <li key={entry.id}>
          <Time>{`${minutes}:${seconds}`}</Time>
          <EventDescription>
            <ClubName>{entry.content.Club === 'HOME' ? HomeClubName.slice(0, 3) : GuestClubName.slice(0, 3) }</ClubName>
            <span>{entry.content.passShoot}</span>
            <span>{entry.content.type}</span>
            <span>{entry.content.Extras?.join('/')}</span>
          </EventDescription>
        </li>
      }
)}
  </UnorderList>
}