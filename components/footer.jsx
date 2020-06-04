import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-area bg-f">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <h3>Jam Buka</h3>
                            <p className="lead"><span className="text-color">Setiap Hari : </span>10.00 AM - 22.00 PM</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <h3>Informasi Kontak</h3>
                            <p className="lead">Alamat : Jl. Suryopranoto No.73, RW.7, Petojo Selatan, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160</p>
                            <p className="lead"><a href="#">Telepon : (021) 3520172</a></p>
                            <p><a href="#"> </a></p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h3>Media Sosial</h3>
                            <div className="subscribe_form">
					        </div>
                                <ul className="list-inline f-social">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/tikalabistro/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/tikala.bistro" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="mailto:marketing@tikalabistro.co.id" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
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