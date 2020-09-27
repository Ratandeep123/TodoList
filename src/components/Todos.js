import React, { Component } from 'react';
import PropType from "prop-types"

import Item from './Item'
class Todos extends Component {
    // @@@@@@@@@@@     for one level up  @@@@@@

    // markComplete = (e) => {
    //     console.log("Hellooooo")
    // }
    render() {
        return this.props.todos.map((todos) => (
            /**  here the todos is a props */
            <Item key={todos.id} todos={todos} markComplete={this.props.markComplete} delTodos={this.props.delTodos} />
        ))
    }
}
Todos.propType = {
    todos: PropType.array.isRequired
}
export default Todos;