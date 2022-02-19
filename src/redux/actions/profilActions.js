import { ActionTypes } from "../actionTypes/action-types";


export const searchProfiles = (profiles) => {
    return {
        type: ActionTypes.SEARCH_PROFILES,
        payload: profiles
    }
}

export const removeProfiles = (profiles) => {
    return {
        type: ActionTypes.REMOVE_PROFILES,
        payload: profiles
    }
}