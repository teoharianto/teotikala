import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends React.Component {
    componentDidMount(){
        //An array of assets
        let scripts = [
            { src: "/static/assets/template/js/jquery-3.2.1.min.js" },
            { src: "/static/assets/template/js/popper.min.js" },
            { src: "/static/assets/template/js/bootstrap.min.js" },
            { src: "/static/assets/template/js/jquery.superslides.min.js" },
            { src: "/static/assets/template/js/images-loded.min.js" },
            { src: "/static/assets/template/js/isotope.min.js" },
            { src: "/static/assets/template/js/baguetteBox.min.js" },
            { src: "/static/assets/template/js/form-validator.min.js" },
            { src: "/static/assets/template/js/contact-form-script.js" },
            { src: "/static/assets/template/js/custom.js" },
        ]
        //Append the script element on each iteration
        scripts.map(item => { 
            const script = document.createElement("script");
            script.async = true;
            script.src = item.src;
            document.body.appendChild(script);
            document.head.appendChild(script);
        })    
     }
     
    render(){
        return(
            <header className="top-navbar">
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