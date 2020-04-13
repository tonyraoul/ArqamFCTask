import { combineReducers } from 'redux'
import Events from './Events'
import { IEvent } from '../Actions'

export interface ApplicationState {
    Events: { Events: IEvent[] }
}

export default combineReducers({
    Events
})