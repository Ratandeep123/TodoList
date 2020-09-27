import React, { Component } from 'react'
import PropType from "prop-types"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Item extends Component {

    getStyle = () => {
        // if (!this.props.todos.completed) {
        //     return {
        //         textDecoration: 'line-throught'
        //     }
        // }
        // else {
        //     return {
        //         textDecoration: "none"
        //     }
        // }
        /************ use ternary operator */
        return {
            background: "#ff6666",
            padding: '10px',
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todos.completed ? 'line-trought' : 'none'
        }
    }
    /******    if we can remove this */
    // markComplete = (e) => {
    //     console.log("--------", this.props)
    // }
    render() {
        const { id, title } = this.props.todos;
        return (
            <div style={this.getStyle()}>

                <p>
                    {/* we can use this.props method */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <Button onClick={this.props.delTodos.bind(this, id)} sty={btnStyle} style={{ float: 'right', textDecoration: "none", borderRadius: '25px', background: 'black' }}>Delete</Button>
                </p>
            </div>
        )
    }
}
Item.propType = {
    todos: PropType.array.isRequired
}
const btnStyle = {
    background: "#ff0000",
    color: "#ffff",
    border: "none",
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: "right"
}
// const itemStyle = {
//     backgroundColor: "#ff6666"
// }
export default Item;