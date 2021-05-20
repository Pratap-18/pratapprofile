import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/projects">Projects</Link></li>
                    <li> <Link to="/certificates">Certificates</Link></li>
                    <li> <Link to="/cv">CV</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
