import React, { Fragment } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  margin: 10px;
`

const SectionTitle = styled.h3`
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
const Cell = styled.td`
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
  border: 1px solid black;
  border-width: 0 0 0 1px;
`

interface TableButtonProps {
  children: React.ReactNode,
  className?: string,
  selected?: boolean
}

const TableButtonElement = ({children, className }: TableButtonProps) => <button className={className}>
  {children}
</button>

const TableButton = styled(TableButtonElement)`
 background: #fff;
 padding: 2px;
 margin: 0 5px;
 shadow: none;
 font-size: 12px;
 border: ${({ selected }) => selected ? '1px solid orange' : '0px'};
`


const SelectionGroup = ({ selected, options, type }: { selected: string, options: string[], type: string }) => {
  return (
    <Cell>
      {
        options.map(option =>
                    <TableButton
                      selected={selected === option}>
                      {option}
                      </TableButton>
        )
      }
    </Cell>
  )
}

const PASS_TYPES= ['Open-Play', 'Kick-off', 'Throw-in']
const BP = ({type}: {type: string}) => <SelectionGroup type={type} options={['LF', 'H', 'RF']} selected='' />
const Height= ({type}: {type: string}) => <SelectionGroup type={type} options={['G', 'L', 'H']} selected='' />
const Extras = ({type}: {type: string}) => <SelectionGroup type={type }options={['A', 'BW']}  selected='BW' />
const PassTable = () =>
  <PassTableElement>
  <Row>
    <Cell>Type</Cell>
    <Cell>Height</Cell>
    <Cell>BP</Cell>
    <Cell>Extras</Cell>
  </Row>
    { PASS_TYPES.map(type =>
      <Row>
        <Cell>{type}</Cell>
        <Height type={type} />
        <BP type={type} />
        <Extras type={type} />
      </Row>
    )}
  </PassTableElement>

const SHOOT_TYPES = ['Open-Play', 'Free-kick', 'Penalty', 'Corner']
const ShootTable = () => <PassTableElement>
  <Row>
    <Cell>Type</Cell>
    <Cell>BP</Cell>
    <Cell>Extras</Cell>
  </Row>
    { SHOOT_TYPES.map(type =>
      <Row>
        <Cell>{type}</Cell>
        <BP type={type} />
        <Extras type={type} />
      </Row>
    )}
  </PassTableElement>

export const ManualInput = () => <Fragment>
  <Section>
     <SectionTitle>Pass</SectionTitle>
     <PassTable />
  </Section>
  <Section>
     <SectionTitle>Shoot</SectionTitle>
     <ShootTable />
  </Section>
</Fragment>
