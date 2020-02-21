import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends React.Component {
    
     
    render(){
        return(
            <header className="top-navbar" style={{zIndex:"11"}}>
            <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Tikala
                    </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar-collapse" id="navbars-rs-food">
                         <ul className="navbar-nav ml-auto">
                             <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                             <li className="nav-item"><a className="nav-link" href="/bistro">Tikala Bistro</a></li>
                             <li className="nav-item"><a className="nav-link" href="/catering">Tikala Catering</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                             <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                         </ul>
                    </div>
                </Navbar.Collapse>
                </div>
            </Navbar>
            </header>
        )
    }
}