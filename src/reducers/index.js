import { combineReducers } from 'redux'
import { RECEIVE_BEERS } from '../constants/actions-types'

const beers = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_BEERS:
            return action.beers
        default:
            return state
    }
};

export default combineReducers({
    beers
});