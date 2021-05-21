import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'




function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"> <Link to="/projects" className="nav-link">Projects</Link></li>
                            <li className="nav-item"> <Link to="/certificates" className="nav-link">Certificates</Link></li>
                            <li className="nav-item"> <Link to="/cv" className="nav-link">CV</Link></li>
                            <li className="nav-item"> <Link to="/contact" className="nav-link">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>

    )
}

export default Nav
