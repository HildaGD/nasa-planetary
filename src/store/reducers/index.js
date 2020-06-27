import { combineReducers } from 'redux'
import favoritePituresState from './app_reducer'
import initialState from './app_initial_state'

export default combineReducers({ 
    astronomyInitialState: initialState,
    astronomy: favoritePituresState 
 })