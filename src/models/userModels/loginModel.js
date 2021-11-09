import axios from 'axios';
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';
import { petitionActions } from '../../redux/actions';
import { handleApiResponseError } from '../../utils/apiErrorHandler';
import { convertObjToFormData } from '../../utils/formdata';


const setLoginState = ( payload = {} ) => {
    return {
        type: petitionActions.SET_LOGIN_STATE,
        payload
    };
}; 
export const userLogin = (values, callback = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://127.0.0.1/petition-api/user/login", convertObjToFormData(values), {
                ...globalConstants.POST_HEADER
            });

            const { status_code, data } = response.data;
            if (status_code === 200) {
                dispatch( setLoginState( data ) );
                console.log(response.data);
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
                    callback.error(handleApiResponseError(error.response.data));
                }
            }
        }
    }

}