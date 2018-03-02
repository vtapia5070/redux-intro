/**
 * Store
 * 
 */

/**
 * Holds Application state
* Allows access to state
* Allows state to update
* Registers listeners
* Unregister listeners.
*/

/**
 * BEST PRACTICES:
 * use one store per app.
 * You can split data logic, 
 * To do this see https://redux.js.org/docs/basics/Reducers.html#splitting-reducers 
 */

/**
 * You can use store.getState() to get access to state.
 */

/**
 * Use store.dispatch() to dispatch actions to state.
 */

/**
 * You can add listeners by using store.subscribe(listener)
 * This returns a function which you can use to unregister listeners.
 */

/**
 * Play with how redux store updates using this ex:
 */

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()