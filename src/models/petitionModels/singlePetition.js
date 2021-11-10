import axios from "axios";
import { authAPI } from "../../authApiService/AuthApiService";
import { globalConstants } from "../../constants/global";
import { petitionActions } from "../../redux/actions";
import { getId } from "../../session/Sessions";
import { handleApiResponseError } from "../../utils/apiErrorHandler";




const setPetition = (singlePetition) => {
    return {
        type: petitionActions.SET_SINGLE_PETITIONS,
        payload: singlePetition
    };
};


export const getPetition = (singlePetitionId) => {
    return async (dispatch) => {
        try {
            // console.log("token>>", getToken());
            // authAPI.SINGLE_PETITIONS_ENDPOINT(singlePetitionId)
            const response = await axios.get(authAPI.SINGLE_PETITIONS_ENDPOINT(singlePetitionId),
                {
                    ...globalConstants.POST_HEADER
                });
            const { status_code, data } = response.data;
            if (status_code === 200) {
                // console.log("responseresponse>>>>>>", data);
                dispatch(setPetition(data))
            } else {
                handleApiResponseError(response.data);
            }

        } catch (error) {
            console.log(error);
            handleApiResponseError(error);
        }

    }

}