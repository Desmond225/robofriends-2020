import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,     //return an object
    payload: text                    //send whatever data is needed
})