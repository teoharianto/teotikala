import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-area bg-f">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h3>About Us</h3>
                            <p>Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui, at ornare turpis ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend arcu ultrices.</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Opening hours</h3>
                            <p className="lead"><span className="text-color">Everyday: </span>10.00 AM - 22.00 PM</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Contact information</h3>
                            <p className="lead">Address : Jl. Suryopranoto No.73, RW.7, Petojo Selatan, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160</p>
                            <p className="lead"><a href="#">Phone : (021) 3520172</a></p>
                            <p><a href="#"> </a></p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Subscribe</h3>
                            <div className="subscribe_form">
                                <form className="subscribe_form">
                                    <input name="EMAIL" id="subs-email" className="form_input" placeholder="Email Address..." type="email" />
                                        <button type="submit" className="submit">SUBSCRIBE</button>
                                        <div className="clearfix"></div>
						        </form>
					        </div>
                                <ul className="list-inline f-social">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="company-name">All Rights Reserved. &copy; 2020 <a href="#">Tikala</a> Design By : ShdGry Based on :
					<a href="https://html.design/"> html design</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
	        </footer>
        )
    }
}