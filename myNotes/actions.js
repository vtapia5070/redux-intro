/**
 * Actions
 * https://redux.js.org/docs/basics/Actions.html
 */

/**
 * Send data from UI aplication to store by using store.dispatch().
 * Actions are objects.
 * Required action props are:
 * * Type <string> - indicates action
 * ex:
 */
{
    type: 'TOGGLE_TODO',
    index: 5
}

{
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
}

/**
 * Action Creators
 */

/**
 * Functions that create and return an action.
 * ex:
 */
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

/**
 * Use store.dispatch() to dispatch an action creator.
 * ex:
 */
// used in container or ui components
dispatch(addTodo(text))
// or by binding
var boundAddTodo = text => dispatch(addTodo(text))
boundTodo(text);

/**
 * Use bindaActionCreators to bind multiple actions
 */
bindActionCreators(actionCreators, dispatch)

