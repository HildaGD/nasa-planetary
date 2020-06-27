import { combineReducers } from 'redux'
import favoritePituresState from './app_reducer'


export default combineReducers({ 
    astronomy: favoritePituresState 
 })