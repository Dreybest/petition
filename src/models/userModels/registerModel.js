import axios from 'axios';
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';
import { petitionActions } from '../../redux/actions';
import { setId } from '../../session/Sessions';
import { handleApiResponseError } from '../../utils/apiErrorHandler';
import { convertObjToFormData } from '../../utils/formdata';

const setRegisterState = ( payload = {} ) => {
    return {
        type: petitionActions.SET_REGISTER_STATE,
        payload
    };
};  
 

export const registerModel = ( values, callback = {} ) => { 
    return async ( dispatch ) => {
        try {
            const response = await axios.post( authAPI.REGISTER_ENDPOINT,  convertObjToFormData(values),
                {
                    ...globalConstants.POST_HEADER
                } );

            const { status_code, data } = response.data;
                // console.log(response.data);
            if ( status_code === 201 ) {
                if ( callback.success ) {
                    setId(response.data.id);
                    dispatch( setRegisterState( data ) );
                    return callback.success( response.data );
                }
            } else {
                if ( callback.error ) {
                    callback.error( handleApiResponseError( response.data ) );
                }
            }
        } catch ( error ) {
            console.log( error.response );
            if ( error && error.response ) {
                if ( callback.error ) {
                    callback.error( handleApiResponseError( error.response.data ) );
                }
            }
        }
    }
};
