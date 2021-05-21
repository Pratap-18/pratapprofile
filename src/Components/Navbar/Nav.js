import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'




function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item"> <Link to="/pratapprofile" className="nav-link">Home</Link></li>
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
