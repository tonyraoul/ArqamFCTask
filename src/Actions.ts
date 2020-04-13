import { ADD_EVENT, TOGGLE_HOMEGUEST } from "./ActionTypes";

let eventID = 0;

export interface toggleHomeGuestType {
  type: typeof TOGGLE_HOMEGUEST,
}
export interface AddEventActionType {
    type: typeof ADD_EVENT,
    payload: IEvent 
}
export interface IEvent {
        id: number,
        timestamp: number,
        content: IEventContent
}
export interface IEventContent {
  passShoot: 'PASS' | 'SHOOT',
  type: string,
  BP?: 'H' | 'LF' | 'RF',
  Height?: 'G' | 'L' | 'H',
  Extras?: 'BW' | 'A',
  Club?: 'HOME' | 'GUEST'
}

export const addEvent = (EventPayload: IEventContent): AddEventActionType => ({
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

export type ActionType = AddEventActionType | toggleHomeGuestType