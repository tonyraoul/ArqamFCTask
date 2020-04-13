import React, { Fragment, useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { addEvent } from '../../Actions';
const PASS_TYPES= ['Open-Play', 'Kick-off', 'Throw-in']
const PassTable = () => {
const [selectedType, setSelectedType] = useState<string>('')
const [selectedBP, setSelectedBP] = useState<string>('')
const [selectedHeight, setSelectedHeight] = useState<string>('')
const [selectedExtra, setSelectedExtra] = useState<string>('')
const onSelectBP = (type: string, option: string) => {
  if(type !== selectedType){
     setSelectedType(type)
     setSelectedHeight('')
     setSelectedExtra('')
  }
  setSelectedBP(option)
}
const onSelectHeight = (type: string, option: string) => {
  if(type !== selectedType){
     setSelectedType(type)
     setSelectedBP('')
     setSelectedExtra('')
  }
  setSelectedHeight(option)
}
const onSelectExtra = (type: string, option: string) => {
  if(type !== selectedType){
     setSelectedType(type)
     setSelectedBP('')
     setSelectedHeight('')
  }
  setSelectedExtra(option)
}
  return <PassTableElement>
  <Row>
    <Cell className='title' >Type<Underline style={{borderColor: '#00FF38'}}/></Cell>
    <Cell className='title' >Height<Underline style={{borderColor: '#0066FF'}}/></Cell>
    <Cell className='title' >BP<Underline style={{borderColor: '#FDCC21'}}/></Cell>
    <Cell className='title' >Extras<Underline style={{borderColor: '#FD21E7'}}/></Cell>
  </Row>
    { PASS_TYPES.map(type =>
      <Row key={type}>
        <Cell>{type}</Cell>
        <SelectionGroup type={type} options={['L', 'H', 'G']} selected={selectedHeight} selectedType={selectedType} onSelect={onSelectHeight} />
        <SelectionGroup type={type} options={['LF', 'H', 'RF']} selected={selectedBP} selectedType={selectedType} onSelect={onSelectBP} />
        <SelectionGroup type={type} options={['A', 'BW']} selected={selectedExtra} selectedType={selectedType} onSelect={onSelectExtra} />
      </Row>
    )}
  </PassTableElement>
}
const SHOOT_TYPES = ['Open-Play', 'Free-kick', 'Penalty', 'Corner']
const ShootTable = () => {
const [selectedType, setSelectedType] = useState<string>('')
const [selectedBP, setSelectedBP] = useState<string>('')
const [selectedExtra, setSelectedExtra] = useState<string>('')
const onSelectBP = (type: string, option: string) => {
  if(type !== selectedType){
     setSelectedType(type)
     setSelectedExtra('')
  }
  setSelectedBP(option)
}
const onSelectExtra = (type: string, option: string) => {
  if(type !== selectedType){
     setSelectedType(type)
     setSelectedBP('')
  }
  setSelectedExtra(option)
}
return <PassTableElement>
  <Row>
    <Cell className='title'>
       Type
      <Underline style={{borderColor: '#00FF38'}}/>
    </Cell>
    <Cell className='title'>BP<Underline style={{borderColor: '#FDCC21'}}/></Cell>
    <Cell className='title'>Extras<Underline style={{borderColor: '#FD21E7'}}/></Cell>
  </Row>
    { SHOOT_TYPES.map(type =>
      <Row key={type}>
        <Cell>{type}</Cell>
        <SelectionGroup type={type} options={['LF', 'H', 'RF']} selected={selectedBP} selectedType={selectedType} onSelect={onSelectBP} />
        <SelectionGroup type={type} options={['A', 'BW']} selected={selectedExtra} selectedType={selectedType} onSelect={onSelectExtra} />
      </Row>
    )}
  </PassTableElement>
}
export const ManualInput = () => {

const dispatch = useDispatch()
useKey('w', () => {
  console.log('w')
  dispatch(addEvent({passShoot: 'PASS', type: 'kick-off', Height: 'G', Extras: 'BW'}))
})
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