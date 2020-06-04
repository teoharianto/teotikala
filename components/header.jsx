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
                        <img src="/static/assets/template/images/logo.svg" style={{width:"auto", height:"35px", padding:"-2%"}}/>
                    </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar-collapse" id="navbars-rs-food">
                         <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link"><ActiveLink href="/">Home</ActiveLink></a></li>
                            <li className="nav-item"><a className="nav-link"><ActiveLink href="/bistro">Tikala Bistro</ActiveLink></a></li>
                             <li className="nav-item"><a className="nav-link"><ActiveLink href="/catering">Tikala Katering</ActiveLink></a></li>
                             {/* <ActiveLink href="/about">About</ActiveLink> */}
                             <li className="nav-item"><a className="nav-link"><ActiveLink href="/promo">Penawaran Spesial</ActiveLink></a></li>
                             <li className="nav-item"><a className="nav-link"><ActiveLink href="/contact">Kontak</ActiveLink></a></li>
                         </ul>
                    </div>
                </Navbar.Collapse>
                </div>
            </Navbar>
            </header>
        )
    }
}