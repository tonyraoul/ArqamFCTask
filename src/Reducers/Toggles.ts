import { ActionType } from "../Actions";
import { TOGGLE_HOMEGUEST, SET_TOGGLE_BY_NAME, RESET_FORM } from "../ActionTypes";
import { IPassShoot, IType, IHeight, IBP, IExtra } from "../Types";
import { PassShoot, BodyPart, ExtraPamaters } from "../EventsTable";

export interface TogglesState {
    HomeGuest: 'HOME' | 'GUEST',
    HomeClubName: string,
    GuestClubName: string,
    StartTime?: number,
    AccMinutes: number, // Minutes to compensate for Last half(s) + Extratime
    PassShoot?: PassShoot,
    Type?: IType,
    Height?: IHeight,
    BP?: BodyPart,
    Extras: ExtraPamaters[],
    AvailableExtras: IExtra[]
}
const initialState: TogglesState = {
    HomeGuest: 'HOME',
    HomeClubName: 'Liverpool',
    GuestClubName: 'Tottenham',
    AccMinutes: 1000 * 60 * 60,
    StartTime: Date.now(), // TODO: Fetch from API
    Extras: [],
    AvailableExtras: [],
};

export default function(state = initialState, action: ActionType) {
  switch (action.type) {
    case TOGGLE_HOMEGUEST: {
      return {
        ...state,
        HomeGuest: state.HomeGuest === 'HOME' ? 'GUEST' : 'HOME'
      };
    }
    case SET_TOGGLE_BY_NAME: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    }
    case RESET_FORM: {
      return {
        ...state,
        BP: '',
        Height: '',
        Extras: [],
        PassShoot: ''
      }
    }
    default:
      return state;
  }
}

