import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import AwesomeSlider from 'modified-react-awesome-slider';
import withAutoplay from 'modified-react-awesome-slider/dist/autoplay';
import 'modified-react-awesome-slider/dist/styles.css';
import withData from "../utils/apollo";
import SliderList from "../components/cp_sliderIndex";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default withData(props => {
  
        return(
            <Layout>
                <Head>
                    <title key="title">Tikala - Home</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
					<script async data-id="35739" src="https://cdn.widgetwhats.com/script.min.js"></script>
                </Head>

        {/* Slide */}

		<SliderList />

               

        {/* About */}
        
        <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img src="/static/assets/template/images/2.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Tikala</span></h1>
						<h4>Tikala Bistro and Catering</h4>
						<br />
						<p>Tikala Bistro is a member of MTH Corp (MTH Global Investama, PT). Establish on April 2019, Tikala Bistro has a combine concept between Indonesian (especially Manado cuisine) and Western food.</p>
						<p>Hygiene and quality is our utmost priority. With fresh ingredients, modern concept and healthy, because only the best food which come out from our warm kitchen.</p>
						{/* <a className="btn btn-lg btn-circle btn-outline-new-white" href="/contact">Reservation</a> */}
					</div>
				</div>
			</div>
		</div>
	    </div>

        {/* Gallery */}
        <div className="gallery-box">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Tikala's Gallery</h2>
						<p>only the best food which come out from our warm kitchen</p>
					</div>
				</div>
			</div>
			<div className="tz-gallery">
				<div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/5.jpg">
							<img className="img-fluid" src="/static/assets/template/images/5.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/6.jpg">
							<img className="img-fluid" src="/static/assets/template/images/6.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/7.jpg">
							<img className="img-fluid" src="/static/assets/template/images/7.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/9.jpg">
							<img className="img-fluid" src="/static/assets/template/images/9.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/10.jpg">
							<img className="img-fluid" src="/static/assets/template/images/10.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/11.jpg">
							<img className="img-fluid" src="/static/assets/template/images/11.jpg" alt="Gallery Images" />
						</a>
					</div>
				</div>
			    </div>
		</div>
	    </div>
        
        {/* Customer Review */}

        {/* <div className="customer-reviews-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Customer Reviews</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8 mr-auto ml-auto text-center">
					<div id="reviews" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner mt-4">
							<div className="carousel-item text-center active">
								<div className="img-box p-1 border rounded-circle m-auto">
									<img className="d-block w-100 rounded-circle" src="/static/assets/template/images/profile-1.jpg" alt="" />
								</div>
								<h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Paul Mitchel</strong></h5>
								<h6 className="text-dark m-0">Web Developer</h6>
								<p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
							</div>
						</div>
						<a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
							<i className="fa fa-angle-left" aria-hidden="true"></i>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#reviews" role="button" data-slide="next">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							<span className="sr-only">Next</span>
						</a>
                    </div>
				</div>
			</div>
		</div>
	    </div> */}


        {/* Contact */}
        {/* <div className="contact-imfo-box">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<i className="fa fa-volume-control-phone"></i>
					<div className="overflow-hidden">
						<h4>Phone</h4>
						<p className="lead">
							+01 123-456-4590
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-envelope"></i>
					<div className="overflow-hidden">
						<h4>Email</h4>
						<p className="lead">
							yourmail@gmail.com
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
	    </div> */}
        </Layout>
        
        )
        
})
