// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token');
}

// set the token from the session storage
export const setToken = (token) => {
    return sessionStorage.setItem('token', token);
}