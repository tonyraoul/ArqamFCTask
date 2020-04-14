import { combineReducers } from 'redux'
import Events from './Events'
import Toggles, { TogglesState } from './Toggles'
import { EventType } from '../Actions'

export interface ApplicationState {
    Events: { Events: EventType[] };
    Toggles: TogglesState;
}

export default combineReducers({
    Events,
    Toggles,
})