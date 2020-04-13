import { ADD_EVENT } from "../ActionTypes";
import { ActionType, AddEventActionType } from "../Actions";

const initialState: {
  Events: AddEventActionType[]
} = {
  Events: [],
};

export default function(state = initialState, action: ActionType ) {
  switch (action.type) {
    case ADD_EVENT: {
      return {
        ...state,
        Events: [...state.Events, action.payload ]
      };
    }
    default:
      return state;
  }
}
