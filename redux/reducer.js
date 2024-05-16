import { combineReducers } from 'redux';
import { ADD_TOKEN, REMOVE_TOKEN } from './actions';

const initialState = {
    token: null
}

const tokenReducer = (state = initialState, action) => {
    if(action.type === ADD_TOKEN){
        return {
            ...state,
            token: action.payload,
        }
    }
    else if(action.type === REMOVE_TOKEN){
        return {
            ...state,
            token: null,
        }
    }
    else {
        return initialState
    }
};

export const rootReducer = combineReducers({
    token: tokenReducer
});