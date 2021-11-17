import { API_HOST } from "../constants/config";
export const authAPI = {
    REGISTER_ENDPOINT: `${API_HOST}/user/register`,
    LOGIN_ENDPOINT: `${API_HOST}/user/login`,
    ALL_PETITIONS_ENDPOINT: `${API_HOST}/petitions/all`,
    SINGLE_PETITIONS_ENDPOINT: (petitionId)=>`${API_HOST}/petitions/details/${petitionId}`,
    CREATE_USER_PETITION:`${API_HOST}/petitions/create`,
    ALL_USER_PETITIONS_ENDPOINT:  (user_id)=>`${API_HOST}/petitions/user/${user_id}`,
    SINGLE_USER_SIGNATURE_ENDPOINT: `${API_HOST}/petitions/signature`,
  
};  