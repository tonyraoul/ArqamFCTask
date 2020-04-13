import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  margin: 10px 0;
`

const SectionTitle = styled.h3`
  margin: 0 10px;
  font-family: IBM Plex Mono;
  text-transform: uppercase;
`

const Underline = styled.div `
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: red;
  padding-bottom: 6px;
  width: 80%;
  margin: auto;
`

const TableElement = ({children, className }: {children: React.ReactNode, className?: string}) =>
<div className={className}>
  <div className='table'>{children}</div>
  <button className='submit-button'>o</button>
</div>

const PassTableElement = styled(TableElement)`
  display: flex;
  flex-direction: row;
  .submit-button {
    width: 20px;
    margin: 15px 0;
    padding: 5px;
    background-color: #FF5252;
    color: white;
    cursor: pointer;
    border: 0;
  }
  .table {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Cell = styled.div`
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

const TableButtonElement = ({children, ...props}: any) => <button {...props}>
  {children}
</button>

const TableButton = styled(TableButtonElement)`
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


const SelectionGroup = ({ selected, options, type, onSelect, selectedType }: { selected: string, options: string[], type: string, onSelect?: Function, selectedType?: string }) => {
  return (
    <Cell>
      {
        options.map(option =>
                    <TableButton
                      key={option}
                      onClick={() => { onSelect && onSelect(type, option)}}
                      selected={selected === option && type === selectedType }>
                      {option}
                      </TableButton>
        )
      }
    </Cell>
  )
}

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
export const ManualInput = () => <Fragment>
  <Section>
     <SectionTitle>Passes</SectionTitle>
     <PassTable />
  </Section>
  <Section>
     <SectionTitle>Shoots</SectionTitle>
     <ShootTable />
  </Section>
</Fragment>
