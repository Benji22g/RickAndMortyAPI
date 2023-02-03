import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer, { restoreSessionAction } from './userDuck';
import thunk from 'redux-thunk';
import charsReducer, { getCharactersAction } from './charsDuck'

let rootReducer = combineReducers({
    user: userReducer,
    characters: charsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    //get chars first time
    getCharactersAction()(store.dispatch, store.getState)
    restoreSessionAction()(store.dispatch)
    return store

}