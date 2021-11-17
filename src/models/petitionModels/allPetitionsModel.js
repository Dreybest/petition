import axios from "axios";
import { petitionActions } from "../../redux/actions";
import { getId } from "../../session/Sessions";
import { handleApiResponseError } from "../../utils/apiErrorHandler";
import { authAPI } from '../../authApiService/AuthApiService';
import { globalConstants } from '../../constants/global';


const setAllPetitions = (allPetitions) => {
    return {
        type: petitionActions.SET_ALL_PETITIONS,
        payload: allPetitions
    };
};


export const getAllPetitions = () => {
    return async (dispatch) => {
        // console.log("getAllCrowdFundsgetAllCrowdFundsgetAllCrowdFunds>>>>>>");
        try {
            // console.log("token>>", getToken());
            const response = await axios.get(authAPI.ALL_PETITIONS_ENDPOINT,
                {
                    ...globalConstants.POST_HEADER
                    // headers: { Authorization: 'Bearer ' + getId() }
                    
                });
            // console.log("responseresponse>>>>>>", response.data)
            const { status_code, data } = response.data;
            if ( status_code === 200 ) {
               
                // response.data.status = false;
                 console.log("responseresponse>>>>>>", response.data.status);
                dispatch(setAllPetitions(data))
            } else {
                handleApiResponseError( response.data );
            }

        } catch (error) {
            console.log(error);
            handleApiResponseError( error )
        }

    }

}