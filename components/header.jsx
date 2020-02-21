import React, { Children } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ActiveLink from './activeLink'

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
                             <ActiveLink href="/">Home</ActiveLink>
                             <ActiveLink href="/bistro">Tikala Bistro</ActiveLink>
                             <ActiveLink href="/catering">Tikala Catering</ActiveLink>
                             <ActiveLink href="/about">About</ActiveLink>
                             <ActiveLink href="/contact">Contact</ActiveLink>
                         </ul>
                    </div>
                </Navbar.Collapse>
                </div>
            </Navbar>
            </header>
        )
    }
}