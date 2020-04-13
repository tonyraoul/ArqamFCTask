import { combineReducers } from 'redux'
import Events from './Events'
import Toggles, { ITogglesState } from './Toggles'
import { IEvent } from '../Actions'

export interface ApplicationState {
    Events: { Events: IEvent[] },
    Toggles: ITogglesState
}

export default combineReducers({
    Events,
    Toggles,
})