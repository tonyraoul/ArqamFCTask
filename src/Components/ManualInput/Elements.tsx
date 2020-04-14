import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '../../Reducers'
import { TogglesState } from '../../Reducers/Toggles'
import { IPassShoot } from '../../Types'
import { setToggleByName, resetForm } from '../../Actions'
import { TYPE } from '../../EventsTable'

export const TableElement = ({children, className }: {children: React.ReactNode; className?: string}) => {
  const { HomeClubName, GuestClubName, HomeGuest } = useSelector<ApplicationState, TogglesState>(state => state.Toggles)
return  <div className={className}>
  <div className='table'>{children}</div>
  <div className='submit-button-container'>
    {/** slicing first 3 letters for FC is not ideal */}
    <button className={`submit-button ${HomeGuest === 'HOME' && 'active'}`}>▶<div className='club-name'>{HomeClubName.slice(0, 3)}</div></button>
    <button className={`submit-button guest ${HomeGuest === 'GUEST' && 'active'}`}>▶<div className='club-name'>{GuestClubName.slice(0, 3)}</div></button>
  </div>
</div>
}

export const TableButtonElement = ({children, ...props}: any) => <button {...props}>
  {children}
</button>
export const Section = styled.section`
  margin: 10px 0;
`

export const SectionTitle = styled.h3`
  margin: 0 10px;
  font-family: IBM Plex Mono;
  text-transform: uppercase;
`

export const Underline = styled.div `
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: red;
  padding-bottom: 6px;
  width: 80%;
  margin: auto;
`
export const PassTableElement = styled(TableElement)`
  display: flex;
  flex-direction: row;
  .submit-button-container {
    display: flex;
    flex-direction: column;
    .submit-button {
      width: 20px;
      padding: 5px;
      flex-grow: 1;
      background: linear-gradient(90deg, #FF0000, #FF7A00, #FF7A00);
      color: white;
      cursor: pointer;
      border: 0;
      box-sizing: content-box;
      border: 2px solid transparent;
    &.active {
      border: 2px solid yellow;
    }
    &.guest {
      background: linear-gradient(90deg, #031965 0%, #0031DE 100%);
    }
    .club-name {
      width: 100%;
      font-size: 8px;
      font-family: IBM Plex Mono;
      text-transform: uppercase;
      margin: 10px auto;
    }
    }
  }
  .table {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const Cell = styled.div`
  flex-grow: 1;
  min-height: 30px;
  box-sizing: border-box;
  overflow: hidden;
  width: 25%;
  display: block;
  padding: 1px;
  font-size: 12px;
  align-content: center;
  text-align: center;
  border-style: solid;
  border-color: black;
  :not(:first-of-type){
    border-width: 0 0 0 1px;
  }
  &.title {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
  }
  font-family: IBM Plex Sans;
`

export const TableButton = styled(TableButtonElement)`
 background: #fff;
 padding: 6px 5px;
 line-height: 4px;
 shadow: none;
 font-size: 12px;
 cursor: pointer;
 ::-moz-focus-inner {
  border: 0;
 }
 border: ${({ selected }) => selected ? '1px solid orange' : '1px solid transparent'};
 &:hover {
  background: #DDD;
 }
`
interface SelectionGroupProps {
  options: string[];
  type: TYPE;
  onSelect?: Function;
  passShoot: IPassShoot;
  name: 'BP' | 'Extras' | 'Height';
}
export const SelectionGroup = ({
  options,
  type,
  passShoot,
  onSelect,
  name,
  }: SelectionGroupProps) => {
  const dispatch = useDispatch()
  const toggles = useSelector<ApplicationState, TogglesState>(state => state.Toggles)

  return (
    <Cell>
      {
        options?.map(option =>
          <TableButton
            key={option}
            onClick={
              () => {
                if(passShoot !== toggles.PassShoot || type !== toggles.Type) {
                  dispatch(resetForm())
                  dispatch(setToggleByName('PassShoot', passShoot))
                }
                dispatch(setToggleByName('Type', type))
                if(name !== 'Extras') {
                    dispatch(setToggleByName(name, option))
                } else {
                  if(!toggles['Extras'].find(x => x === option)) {
                    dispatch(setToggleByName(name, [...toggles['Extras'], option]))
                  } else {
                    dispatch(setToggleByName(name, [...toggles['Extras'].filter(x => x !== option)]))
                  }
                }
              }
            }
            selected={ toggles.PassShoot === passShoot && toggles.Type === type &&  (toggles[name] === option || (toggles as any)[name]?.includes(option)) }>
            {option}
          </TableButton>
        )
      }
    </Cell>
  )
}