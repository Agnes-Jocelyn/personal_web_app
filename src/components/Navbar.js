import React, {Component} from 'react'
import './style.css' 

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                    <span>Home</span> &nbsp;
                    <span>About</span> &nbsp;
                    <span>Gallery</span> &nbsp;
            </div>
        )
    }
}

export default Navbar