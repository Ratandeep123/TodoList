import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({

            title: ''
        })
    }
    render() {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add Todos...." required value={this.state.value} onChange={this.handleChange} style={{ flex: '10', padding: '5px', width: '104rem' }} />
                    <input type="submit" value="submit" className="btn" style={{ flex: '1', backgroundColor: "gray", float: 'right', color: "white" }} />
                </form>
            </div>
        )
    }
}

export default AddTodo
