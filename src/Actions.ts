import { ADD_EVENT, TOGGLE_HOMEGUEST, SET_TOGGLE_BY_NAME, RESET_FORM } from "./ActionTypes";
import { ExtraPamaters } from "./EventsTable";

let eventID = 0;

export interface ToggleHomeGuestType {
  type: typeof TOGGLE_HOMEGUEST;
}
export interface ResetFormType {
  type: typeof RESET_FORM;
}

export interface SetToggleByNameType {
  type: typeof SET_TOGGLE_BY_NAME;
  payload: {
    name: string;
    value: string | string[];
  };
}
export interface AddEventActionType {
    type: typeof ADD_EVENT;
    payload: EventType; 
}
export interface EventType {
        id: number;
        timestamp: number;
        content: EventContent;
}
export interface EventContent {
  passShoot: 'PASS' | 'SHOOT';
  type: string;
  BP?: 'H' | 'LF' | 'RF';
  Height?: 'G' | 'L' | 'H';
  Extras?: ExtraPamaters[];
  Club: 'HOME' | 'GUEST';
}

export const addEvent = (EventPayload: EventContent): AddEventActionType => ({
  type: ADD_EVENT,
  payload: {
    id: ++eventID,
    timestamp: Date.now(),
    content: EventPayload
  }
});

export const toggleHomeGuest = () => ({
  type: TOGGLE_HOMEGUEST
})

export const setToggleByName = (name: string, value: string | string[]) => ({
  type: SET_TOGGLE_BY_NAME,
  payload: {
    name,
    value
  }
})

export const resetForm = () => ({
  type: RESET_FORM
})

export type ActionType = AddEventActionType | ToggleHomeGuestType | SetToggleByNameType | ResetFormType