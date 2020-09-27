import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h3>Todo List</h3>
                <div>
                    <Link to="/" style={{ color: "white" }}>Home</Link>
                    <br />
                    <Link to="/about" style={{ color: "white" }}>About</Link>
                </div>
            </header>
        </div>
    )
}

const headerStyle = {
    color: '#ff0047',
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
    padding: "10px ",
    background: "black",

}
export default Header