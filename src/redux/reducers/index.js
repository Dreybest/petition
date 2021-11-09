import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { petitionsReducer } from "./petitions";



const petitionsPersistConfig = {
    key: 'petition',
    storage
};




export const rootReducer = combineReducers({
    petition: persistReducer(petitionsPersistConfig, petitionsReducer),
});
