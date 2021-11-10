import axios from 'axios';
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';
import { petitionActions } from '../../redux/actions';
import { handleApiResponseError } from '../../utils/apiErrorHandler';
import { convertObjToFormData } from '../../utils/formdata';


const setUserPetitionState = ( payload = {} ) => {
    return {
        type: petitionActions.SET_CREATE_USER_PETITIONS,
        payload
    };
}; 
export const createUserPetition = (values, callback = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(authAPI.CREATE_USER_PETITION, convertObjToFormData(values), {
                ...globalConstants.POST_HEADER
            });

            const { status_code, data } = response.data;
            if (status_code === 201) {

                dispatch( setUserPetitionState( data ) );
                // console.log("response.data", data.data);
                return callback.success(response.data) 
            }
            else {
                return callback.error(handleApiResponseError(response.data))
            }
        }
        catch (error) {
            console.log(error);
            if (error && error.response) {
                if (callback.error) {
                    callback.error(handleApiResponseError(error));
                }
            }
        }
    }

}