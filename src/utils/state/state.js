import { legacy_createStore } from 'redux';

const initialState = {
    userToken: null,
}

const tokenAdd = () => ({type: "tokenAdd" });
const tokenRemove = () => ({ type: "tokenRemove" });

function reducer(state, action) {
    if (action.type === "tokenAdd") {
        return {
            ...state,
            userToken: '12'
        }
    }
    if (action.type === "tokenRemove") {
        return {
            ...state,
            userToken: null
        }
    }
    return state;
}

export const store = legacy_createStore(reducer, initialState);

export const state = store.getState();

store.subscribe(
    () => {
        const state = store.getState();
        console.log(state.userToken);
    }
);
