// step 2: create actions
//actions that return a function go towards the reducers through a 'tunnel'; middleware

import { CHANGE_SEARCH_FIELD } from './constants';
import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

//sync
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,     //return an object
    payload: text                    //send whatever data is needed
})

//async
//higher order function (function that returns a function - because requestRobots returns a function, thus needs to be dispatched
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ 
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data 
        }))
      .catch(error => dispatch({
          type: REQUEST_ROBOTS_FAILED,
          payload: error
      }))
}



