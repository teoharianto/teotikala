import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component{
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
     
    render() {
        return(
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        )
    }
}