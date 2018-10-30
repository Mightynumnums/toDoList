import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import { bindActionCreators } from 'redux'

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: '',
    }
    this.onChangeTodoText = this.onChangeTodoText.bind(this)
  }

  onChangeTodoText(event) {
    this.setState({
      todoText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <input onChange={this.onChangeTodoText} value={this.state.todoText} type="text" id="inputEmail3" placeholder="add todo here" />
          <button type="button" onClick={() => this.setState({ todotText: '' })}>Cancel</button>
          <button type="button" onClick={() => { this.props.addTodo(this.state.todoText); this.setState({ todoText: '' }) }}>Add Todo</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo
  }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)