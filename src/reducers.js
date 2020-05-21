// step 3: create reducers
//3 principles:
//single source of truth
//state is read only
//changes using a pure function

import { CHANGE_SEARCH_FIELD } from './constants';
import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

const initialSearchState = {
    searchField: ''
}

//get input of state and action, and act upon the state
export const searchRobots = (state=initialSearchState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}) //Reducer should be a pure function - take input and then return a new state
            // return { ...state, searchField: action.payload } same thing.
        default: 
        return state;
    }
}

const initialRobotsState = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialRobotsState, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}


