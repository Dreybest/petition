import axios from 'axios';
import { authAPI } from '../../authApiService/AuthApiService';
import { setId } from '../../session/Sessions';
import { globalConstants } from '../../constants/global';
import { petitionActions } from '../../redux/actions';
import { handleApiResponseError } from '../../utils/apiErrorHandler';
import { convertObjToFormData } from '../../utils/formdata';


const setLoginState = ( user ) => {
    return {
        type: petitionActions.SET_LOGIN_STATE,
        payload:user
    };
}; 
export const userLogin = (values, callback = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(authAPI.LOGIN_ENDPOINT, convertObjToFormData(values), {
                ...globalConstants.POST_HEADER
            });

            const { status_code, data } = response.data;
            if (status_code === 200) {
                response.data.status = true;
                setId(response.data.id);
                console.log(response.data.id);
                dispatch( setLoginState( response.data ) );
                console.log(response.data);
                return callback.success(data) 
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