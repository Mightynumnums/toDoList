import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, setVisibilityFilter } from '../actions/actionCreator.js'

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionTypes.js'
import { bindActionCreators } from 'redux'

class Table extends Component {
  render() {
    return (
      <div>
        <nav style={{ marginTop: "60px" }}>
          <ol>
            <li
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
              All
            </li>
            <li
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              Completed
            </li>
            <li
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Active
            </li>
          </ol>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table >
            <thead>
              <tr>
                <th >Todos</th>
                <th >Actions</th>
              </tr>
            </thead>
            {/*<tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </td>
                  <td>
                    <span
                      onClick={() => this.props.deleteTodo(todo.id)}
                    />
                    <span
                      onClick={() => this.props.toggleTodo(todo.id)}
                    />
                  </td>
                </tr>
              ))}
                  </tbody>*/}
          </table>
        ) : (
            <div>
              <div>Todo List is empty or Filter results show no results</div>
            </div>
          )}{" "}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(task => task.completed)
    case SHOW_ACTIVE:
      return todos.filter(task => !task.completed)
    default: throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteTodo,
    toggleTodo,
    setVisibilityFilter
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)


