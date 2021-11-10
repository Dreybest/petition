import { API_HOST } from "../constants/config";
export const authAPI = {
    REGISTER_ENDPOINT: `${API_HOST}/user/register`,
    LOGIN_ENDPOINT: `${API_HOST}/user/login`,
    ALL_PETITIONS_ENDPOINT: `${API_HOST}/petitions/all`,
    SINGLE_PETITIONS_ENDPOINT: (id)=>`${API_HOST}/petitions/details/${id}`,
    CREATE_USER_PETITION:`${API_HOST}/petitions/create`,
    ALL_USER_PETITIONS_ENDPOINT:  (user_id)=>`${API_HOST}/petitions/user/${user_id}`,
    // SINGLE_USER_PETITIONS_ENDPOINT: (id)=>`${API_HOST}/petitions/details/${id}`,
  
};  