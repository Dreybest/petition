import { petitionActions } from "../actions";
import { petitionInitialState } from "./initialState";



export const petitionsReducer = (state = petitionInitialState, action) => {

  switch (action.type) {

    case petitionActions.SET_REGISTER_STATE:
      return {
        ...state,
        isLoggedIn: true,
        status: true,
        ...action.payload
      };

    case petitionActions.SET_SINGLE_PETITIONS:
      return {
        ...state,
        isLoggedIn: true,
        status: true,
        singlePetition: action.payload

      };
    case petitionActions.SET_CREATE_USER_PETITIONS:
      return {
        ...state,
        isLoggedIn: true,
        status: true,
        ...action.payload

      };
    case petitionActions.SET_ALL_USER_PETITIONS:
      return {
        ...state,
        isLoggedIn: true,
        status: true,
        allUserPetitions: action.payload

      };



    case petitionActions.SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: true,
        status: true,
        ...action.payload,

      };
    // allUserPetitions
    case petitionActions.SET_LOGOUT_STATE:
      return {
        isLoggedIn: false,
        status: false,
        id: null,


      };
    case petitionActions.SET_ALL_PETITIONS:
      return {
        ...state,
        isLoggedIn: false,
        allPetitions: action.payload

      };

    default:
      return state;
  }
};
