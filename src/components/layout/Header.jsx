import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className ="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
                <div className="container" style={{textAlign:"left", marginLeft:"20px"}}>
                    <Link to="/" className="navbar-brand" style={{fontWeight: "bold",fontSize:"30px", color:"blue", }}>
                    <span style={{color:"black"}}>Our</span> Client
                    </Link>
                    <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to="/"   className="nav-link" style={{color:"black", fontSize:"20px"}}>
                            <i className="fas fa-home" /> 
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link  to="/contact/add"   className="nav-link" style={{color:"black", fontSize:"20px"}}>
                            <i className="fas fa-plus" /> Add
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}
