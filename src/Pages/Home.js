import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import './home.css'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
