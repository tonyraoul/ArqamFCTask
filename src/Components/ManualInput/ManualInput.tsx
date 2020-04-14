import React, { Fragment, useState, useEffect } from 'react'
import useKey from '@rooks/use-key';
import { 
  Cell,
  Row,
  PassTableElement,
         Section,
         SelectionGroup,
         SectionTitle,
         Underline,
       } from './Elements'
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, toggleHomeGuest, setToggleByName, resetForm } from '../../Actions';
import { ApplicationState } from '../../Reducers';
import Toggles, { ITogglesState } from '../../Reducers/Toggles';
import { IType } from '../../Types';
import { Height, TYPE, BP, passShoot, ExtraPamaters, Extras } from '../../EventsTable';

const PASS_TYPES: TYPE[] = [TYPE.OPENPLAY, TYPE.KICKOFF, TYPE.THROWIN]
const PassTable = () => {
const Toggles  = useSelector<ApplicationState, ITogglesState>(state => state.Toggles)
const { AvailableExtras, PassShoot, Type } = Toggles
return <PassTableElement>
  <Row>
    <Cell className='title'>
       Type
      <Underline style={{borderColor: '#00FF38'}}/>
    </Cell>
    <Cell className='title'>Height<Underline style={{borderColor: '#FDCC21'}}/></Cell>
    <Cell className='title'>BP<Underline style={{borderColor: '#FDCC21'}}/></Cell>
    <Cell className='title'>Extras<Underline style={{borderColor: '#FD21E7'}}/></Cell>
  </Row>
    { PASS_TYPES.map((type: TYPE) =>
      <Row key={type}>
        <Cell>{type}</Cell>
        <SelectionGroup type={type} passShoot="PASS" name="Height" options={Height(type)} />
        <SelectionGroup type={type} passShoot="PASS" name="BP" options={BP(type, "PASS")} />
        <SelectionGroup type={type} passShoot="PASS" name="Extras" options={(type === Type && "PASS" === PassShoot) ? Extras("PASS", Toggles.BP) : []} />
      </Row>
    )}
  </PassTableElement>
}


const SHOOT_TYPES: TYPE[] = [TYPE.OPENPLAY, TYPE.FREEKICK, TYPE.PENALTY, TYPE.CORNER]
const ShootTable = () => {
const { AvailableExtras, PassShoot, Type, BP: TogglesBP }  = useSelector<ApplicationState, ITogglesState>(state => state.Toggles)
return <PassTableElement>
  <Row>
    <Cell className='title'>
       Type
      <Underline style={{borderColor: '#00FF38'}}/>
    </Cell>
    <Cell className='title'>BP<Underline style={{borderColor: '#FDCC21'}}/></Cell>
    <Cell className='title'>Extras<Underline style={{borderColor: '#FD21E7'}}/></Cell>
  </Row>
    { SHOOT_TYPES.map((type: TYPE) =>
      <Row key={type}>
        <Cell>{type}</Cell>
        <SelectionGroup type={type} passShoot="SHOOT" name="BP" options={BP(type, "SHOOT")} />
        <SelectionGroup type={type} passShoot="SHOOT" name="Extras" options={(type === Type && "SHOOT" === PassShoot) ? Extras("SHOOT", TogglesBP) : []} />
      </Row>
    )}
  </PassTableElement>
}
const toggleArrayValue = (value: string, arr: string[]): string[] => {
    const hasA = arr.find(x => x === value)
    let newArr = []
    if(hasA) {
      newArr = arr.filter(x => x !== value)
    } else {
      newArr = [...arr, value]
    }
    return newArr
}

export const ManualInput = () => {
const toggles = useSelector<ApplicationState, ITogglesState>(state => state.Toggles)
const { HomeGuest } = toggles
const dispatch = useDispatch()
useEffect(() => {
  if(toggles.PassShoot === 'SHOOT') {
    if(toggles.BP === 'H') {
      dispatch(setToggleByName('AvailableExtras', ['A']))
    } else if(toggles.BP === 'LF' || toggles.BP === 'RF') {
      dispatch(setToggleByName('AvailableExtras', ['BW']))
    } else {
      dispatch(setToggleByName('AvailableExtras', []))
    }
  } else if(toggles.PassShoot === 'PASS') {
    if(toggles.BP === 'H') {
      dispatch(setToggleByName('AvailableExtras', ['A', 'D', 'F', 'R']))
    } else if(toggles.BP === 'LF' || toggles.BP === 'RF') {
      dispatch(setToggleByName('AvailableExtras', ['D', 'F', 'R']))
    } else {
      dispatch(setToggleByName('AvailableExtras', []))
    }
  } else {
    dispatch(setToggleByName('AvailableExtras', []))
  }
}, [toggles.BP, dispatch, toggles.PassShoot])
// Not useful very under current UX
useKey('Enter', () => {
  if(toggles.PassShoot && toggles.BP && toggles.Type) {
    dispatch(addEvent({
      passShoot: toggles.PassShoot,
      BP: toggles.BP,
      Height: toggles.Height,
      Club: toggles.HomeGuest,
      type: toggles.Type
    }))
    dispatch(resetForm())
  }
})
useKey('s', () => {
  dispatch(resetForm())
  dispatch(setToggleByName('PassShoot', 'SHOOT'))
})
useKey('e', () => {
  dispatch(resetForm())
  dispatch(setToggleByName('PassShoot', 'PASS'))
  dispatch(setToggleByName('Height', 'L'))
  dispatch(setToggleByName('Type', 'Open-Play'))
})
useKey('w', () => {
  dispatch(resetForm())
  dispatch(setToggleByName('PassShoot', 'PASS'))
  dispatch(setToggleByName('Height', 'G'))
  dispatch(setToggleByName('Type', 'Open-Play'))
})
useKey('a', () => {
  if(toggles['AvailableExtras'].includes('A')) {
    const arr = toggleArrayValue('A', toggles['Extras'])
    dispatch(setToggleByName('Extras', arr))
  }
})
useKey('b', () => {
  if(toggles['AvailableExtras'].includes('BW')) {
    const arr = toggleArrayValue('BW', toggles['Extras'])
    dispatch(setToggleByName('Extras', arr))
  }
})
useKey('f', () => {
  if(toggles['AvailableExtras'].includes('F')) {
    const arr = toggleArrayValue('F', toggles['Extras'])
    dispatch(setToggleByName('Extras', arr))
  }
})
useKey('r', () => {
  if(toggles['AvailableExtras'].includes('R')) {
    const arr = toggleArrayValue('R', toggles['Extras'])
    dispatch(setToggleByName('Extras', arr))
  }
})
useKey('d', () => {
  if(toggles['AvailableExtras'].includes('D')) {
    const arr = toggleArrayValue('D', toggles['Extras'])
    dispatch(setToggleByName('Extras', arr))
  }
})
useKey('1', () => {
  dispatch(setToggleByName('BP', 'LF'))
})
useKey('2', () => {
  dispatch(setToggleByName('BP', 'H'))
})
useKey('3', () => {
  dispatch(setToggleByName('BP', 'RF'))
})
useKey('Space', () => {
  dispatch(toggleHomeGuest())
})
const invalidityMatrix = [
  {passShoot: "PASS", type: "Throw-in", height: "G"},
  {passShoot: "PASS", type: "Throw-in", BP: "LF"},
  {passShoot: "PASS", type: "Throw-in", BP: "H"},
  {passShoot: "PASS", type: "Throw-in", BP: "RF"},
]
return (<Fragment>
  <Section>
     <SectionTitle>Passes</SectionTitle>
     <PassTable />
  </Section>
  <Section>
     <SectionTitle>Shoots</SectionTitle>
     <ShootTable />
  </Section>
</Fragment>)
}