import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
}

//get input of state and action, and act upon the state
export const searchRobots = (state=initialState, action={}) => {
    console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}) //Reducer should be a pure function - take input and then return a new state
            // return { ...state, searchField: action.payload } same thing.
        default: 
        return state;
    }
}

//3 principles:
//single source of truth
//state is read only
//changes using a pure function
