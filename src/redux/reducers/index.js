import {combineReducers} from 'redux';
import { profilesReducer } from './profilReducers';

export const reducers = combineReducers({
    allProfiles: profilesReducer,
})

