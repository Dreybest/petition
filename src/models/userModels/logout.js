import { petitionActions } from '../../redux/actions';

export const logoutModel = () => { 
    return {
        type: petitionActions.SET_LOGOUT_STATE
    }
}