import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title key="title">Tikala - Contact</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                    <script async data-id="35739" src="https://cdn.widgetwhats.com/script.min.js"></script>
                </Head>

                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Contact */}
                <div class="contact-box" style={{marginBottom:"-5%"}}>
                <div class="container">
                <div class="row" >
                            <div class="col-lg-12">
                                <div class="heading-title text-center">
                                    <h2>Address</h2>
                                </div>
                            </div>
                        </div>
                        <div class="map-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.816036376398!2d106.8158865!3d-6.1703733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe683bb0b0b67fc5!2sTikala%20Bistro!5e0!3m2!1sid!2sid!4v1582009543857!5m2!1sid!2sid" style={{width:"100%", height:"100%"}}></iframe>
                </div>
                </div>
                </div>
                
                <div class="contact-box" >
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="heading-title text-center">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <form id="contactForm" action="mailto:marketing@tikalabistro.co.id" method="post" enctype="text/plain">
                                    <div class="row">
                                        <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" name="Nama  " placeholder="Your Name" required data-error="Please enter your name" />
                                                <div class="help-block with-errors"></div>
								        </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" placeholder="Your Email" id="email" class="form-control" name="Email  " required data-error="Please enter your email" />
                                                    <div class="help-block with-errors"></div>
								            </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" id="message" placeholder="Your Message" name="Isi Pesan  "ows="4" data-error="Write your message" required></textarea>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                                <div class="submit-button text-center">
                                                    <button class="btn btn-common" id="submit" type="submit" value="Send">Send Message</button>
                                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>            
					                    </form>
                                    </div>
			                    </div>
                            </div>
                        </div>


                        <div className="contact-imfo-box">
		        <div className="container">
			<div className="row">
				<div className="col-md-4">
					<i className="fa fa-volume-control-phone"></i>
					<div className="overflow-hidden">
						<h4>Phone</h4>
						<p className="lead">
                        (021) 3520172
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-envelope"></i>
					<div className="overflow-hidden">
						<h4>Email</h4>
						<p className="lead">
                        marketing@tikalabistro.co.id
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-map-marker"></i>
					<div className="overflow-hidden">
						<h4>Location</h4>
						<p className="lead">
                        Jl. Suryopranoto No.73, RW.7, Petojo Selatan, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160
						</p>
					</div>
				</div>
			</div>
            </div>
            </div>

           {/* Footer Contact */}
           
         </Layout>
        )
    }
}