import { ActionTypes } from "../actionTypes/action-types";

const initialState = {
    profiles: []
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_PROFILES:
            return {...state, profiles: action.payload};
        
        default:
            return state;
    }
}
