import React from 'react'
import { ManualInput } from './index'
import { render, fireEvent, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../../Store';


describe('Manual Input', () => {
  it('Should render without crashing', () => {
    render(
    <Provider store={Store}>
        <ManualInput />
    </Provider>
    );
  })

  it('Should display Bachwheel extras', () => {
    const { queryByText } = render(
    <Provider store={Store}>
        <ManualInput />
    </Provider>
    );
    expect(queryByText('BW')).toBeNull()
    const RF = (within(queryByText('Free-Kick')?.parentNode! as HTMLElement).queryByText('RF'))
    fireEvent.click(RF!)
    expect(queryByText('BW')).toBeVisible()
    expect(queryByText('A')).toBeNull()
  })

  it('Should display Areal-Win extra when needed', () => {
    const { queryAllByText, queryByText } = render(
    <Provider store={Store}>
        <ManualInput />
    </Provider>
    );
    expect(queryByText('A')).toBeNull()
    const Head = (within(queryAllByText('Open-Play')[1]?.parentNode! as HTMLElement).queryByText('H'))
    fireEvent.click(Head!)
    expect(queryByText('A')).toBeVisible()
    expect(queryByText('BW')).toBeNull()
  })

})