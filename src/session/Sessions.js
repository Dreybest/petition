// return the token from the session storage
export const getId = () => {
    return sessionStorage.getItem('id');
}

// set the token from the session storage
export const setId = (id) => {
    return sessionStorage.setItem('id', id);
}