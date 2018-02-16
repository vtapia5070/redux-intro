/**
 * Reducers
 * https://redux.js.org/docs/basics/Reducers.html
 */

 /**
  * Specify exactly hot to change the state when an action is
  dispatched.
  * State is a single Object. 
  * BEST PRACTICE: keep data seperate from
  UI State.
  * ex:
  */
{
    visibilityFilter: 'SHOW_ALL', // UI state
        todos: [ // data
            {
                text: 'Consider using Redux',
                completed: true,
            },
            {
                text: 'Keep all state in a single tree',
                completed: false
            }
        ]
}

/**
 * It's called a reducer because it's based on JS native reduce method.
 */

(previousState, action) => newState

/**
 * BEST PRACTICES:
 * 1) keep reducer pure, do not mutate.
 *  - for objects, use Object.assign()
 *  - for arrays, use Array.prototype.concat() or the spread operator
 * 2) No side effects/api calls
 * 3) No non-pure invocations (Date.now(), Math.random())
 */

 /**
  * Reducers should have an initial state.
  * Note: You can use ES6 default params instead.
  * ex:
  */

import { VisibilityFilters } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
}

/**
 * Use multiple reducers to handle different parts of state.
 * You can use combineReducers() to map multiple reducers to different
 * parts of the state.
 */
import { combineReducers } from 'redux'
import * as reducers from './reducers'

const todoApp = combineReducers(reducers)

// or

import { combineReducers } from 'redux'

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp