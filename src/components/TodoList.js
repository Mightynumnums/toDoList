import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import todos from '../reducers/todos';
import { toggleToDo } from '../actions';

const TodoList = ({ todo, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleToDo(todo.id)} />
    ))}
  </ul>
)

TodoList.PropTypes = {
  todod: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList