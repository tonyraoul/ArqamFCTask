import React from 'react'
import styled from 'styled-components'

export const TableElement = ({children, className }: {children: React.ReactNode, className?: string}) =>
<div className={className}>
  <div className='table'>{children}</div>
  <button className='submit-button'>o</button>
</div>

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

export const SelectionGroup = ({ selected, options, type, onSelect, selectedType }: { selected: string, options: string[], type: string, onSelect?: Function, selectedType?: string }) => {
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