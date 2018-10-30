import { combineReducers } from 'redux'
import todos from './FilterReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})
