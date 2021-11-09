import { petitionActions } from "../actions";
import { petitionInitialState } from "./initialState";



export const petitionsReducer = ( state = petitionInitialState, action ) => {

  switch ( action.type ) {
    case petitionActions.SET_LOGIN_STATE: 
      return {
        ...state,
        status: true,
        ...action.payload
      };
      case petitionActions.SET_REGISTER_STATE: 
      return {
        ...state,
        status: true,
        ...action.payload
      };

  
    default:
      return state;
  }
};
