import { ADD_TODO, REMOVE_TODO, SHOW_ALL, TOGGLE_TODO, SHOW_VISIBILITY_FILTER } from './actionTypes.js'

let ToDoId = 2

export const addToDo = text =>({
  type: ADD_TODO, 
  id: ToDoId++,
  text
})

export const deleteToDo = id => ({
  type: REMOVE_TODO,
  id: id
})

export const toggleToDo = id => ({
  type: TOGGLE_TODO,
  id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER
  filter
})