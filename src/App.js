import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from '../src/components/Todos'
import Header from './components/Layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/About/About'

import './App.css';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Take me to helpp",
        completed: true
      },
      {
        id: 3,
        title: "Take out scrreenshot",
        completed: false
      }
    ]
  }
  delTodos = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todos => todos.id !== id)]
    })
  }
  // toggle complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed
        }
        return todos;
      })
    })
  }
  AddTodo = (title) => {
    const newTodos = {
      id: 4,
      title,
      completed: false

    }
    this.setState({
      todos: [...this.state.todos, newTodos]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodos={this.delTodos} />
            </React.Fragment>
          )} />
        </div>
        <Route path="/about" component={About} />
      </Router>
    );
  }
}
export default App;