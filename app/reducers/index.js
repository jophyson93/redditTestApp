import { combineReducers } from 'redux'
import * as recipesReducers from '../actions/recipes'


export default combineReducers(Object.assign(
	recipesReducers,
))