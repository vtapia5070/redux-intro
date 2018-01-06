/**
 * Store methods:
 * TODO add reduc to app to run createStore
 */

const { createStore } = Redux;
// import createStore from 'Redux';

const store = createStore(counter);
// CreateCtore has 3 important methods

// 1. get state returns the current state of store
console.log(store.getState());

// 2. dispatch - dispatch actions to change state of app
store.dispatch({ type: 'INCREMENT' });

console.log(store.getState()); // should increment

/**
 * Intentionally mimicing react below.
 */

const render = () => {

    document.body.innerText = store.getState();

};

// 3. subscribe - Register a callback that redux will call anytime
// action is dispatched so you can update the UI.
store.subscribe(render);

render(); // renders the initial state.

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

