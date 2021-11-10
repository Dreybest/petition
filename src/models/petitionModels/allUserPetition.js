import axios from "axios";
import { petitionActions } from "../../redux/actions";
import { handleApiResponseError } from "../../utils/apiErrorHandler";
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';


const setAllUserPetitions = (allUserPetitions) => {
    return {
        type: petitionActions.SET_ALL_USER_PETITIONS,
        payload: allUserPetitions
    };
};


export const getAllUserPetitions = (user_id) => {
    return async (dispatch) => {
        try {
            // console.log("token>>", getToken());
            const response = await axios.get(authAPI.ALL_USER_PETITIONS_ENDPOINT(user_id),
                {
                    ...globalConstants.POST_HEADER
                    
                });
            // console.log("responseresponse>>>>>>", response.data)
            const { status_code, data } = response.data;
            if ( status_code === 200 ) {
                // console.log("responseresponse>>>>>>", data);
                dispatch(setAllUserPetitions(data))
            } else {
                handleApiResponseError( response.data );
            }

        } catch (error) {
            console.log(error);
            handleApiResponseError( error )
        }

    }

}