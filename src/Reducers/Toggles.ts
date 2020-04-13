import { ActionType } from "../Actions";
import { TOGGLE_HOMEGUEST } from "../ActionTypes";

export interface ITogglesState {
    HomeGuest: 'HOME' | 'GUEST',
    HomeClubName: string,
    GuestClubName: string,
    StartTime?: number,
    AccMinutes: number, // Minutes to compensate for Last half(s) + Extratime
}
const initialState: ITogglesState = {
    HomeGuest: 'HOME',
    HomeClubName: 'Liverpool',
    GuestClubName: 'Tottenham',
    AccMinutes: 1000 * 60 * 60,
    StartTime: Date.now(), // TODO: Fetch from API
};

export default function(state = initialState, action: ActionType) {
  switch (action.type) {
    case TOGGLE_HOMEGUEST: {
      return {
        ...state,
        HomeGuest: state.HomeGuest === 'HOME' ? 'GUEST' : 'HOME'
      };
    }
    default:
      return state;
  }
}

