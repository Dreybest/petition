import axios from 'axios';
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';
import { petitionActions } from '../../redux/actions';
import { handleApiResponseError } from '../../utils/apiErrorHandler';
import { convertObjToFormData } from '../../utils/formdata';


const setUserSignature= ( petitionSignature ) => {
    return {
        type: petitionActions.SET_SIGNATURE_PETITIONS,
        payload:petitionSignature
    };
}; 
export const createUserSignature = (values, callback = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(authAPI.SINGLE_USER_SIGNATURE_ENDPOINT, convertObjToFormData(values), {
                ...globalConstants.POST_HEADER
            });

            const { status_code, data } = response.data;
            if (status_code === 200) {

                dispatch( setUserSignature( data ) );
                // console.log("response.data", data.data);
                response.data.status = true;
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