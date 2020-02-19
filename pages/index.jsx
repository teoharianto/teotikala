import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default class IndexPage extends React.Component{

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
            <Layout>
                <Head>
                    <title key="title">Tikala - Home</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                </Head>

                {/* Slide */}
                
                <div id="slides" className="cover-slides">
		        <ul className="slides-container">
			    <li className="text-center">
				<img src="/static/assets/template/images/slider-01.jpg" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To Tikala <br /> Bistro & Catering</strong></h1>
							<p className="m-b-40">Taste sensations that you never get anywhere else.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			    </li>
                <li className="text-center">
				<img src="/static/assets/template/images/slider-02.jpg" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To Tikala <br /> Bistro & Catering</strong></h1>
							<p className="m-b-40">Taste sensations that you never get anywhere else.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			    </li>
                <li className="text-center">
				<img src="/static/assets/template/images/slider-03.jpg" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To Tikala <br /> Bistro & Catering</strong></h1>
							<p className="m-b-40">Taste sensations that you never get anywhere else.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			    </li>
		        </ul>
		        <div className="slides-navigation">
			    <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
			    <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
		        </div>
	            </div>

        {/* About */}
        
        <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img src="/static/assets/template/images/about-img.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Tikala</span></h1>
						<h4>Tikala Bistro and Catering</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
						<a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
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
						<h2>Menu Gallery</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="tz-gallery">
				<div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/gallery-img-01.jpg">
							<img className="img-fluid" src="/static/assets/template/images/gallery-img-01.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/gallery-img-02.jpg">
							<img className="img-fluid" src="/static/assets/template/images/gallery-img-02.jpg" alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="/static/assets/template/images/gallery-img-03.jpg">
							<img className="img-fluid" src="/static/assets/template/images/gallery-img-03.jpg" alt="Gallery Images" />
						</a>
					</div>
				</div>
			    </div>
		</div>
	    </div>
        
        {/* Customer Review */}

        <div className="customer-reviews-box">
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
	    </div>


        {/* Contact */}
        <div className="contact-imfo-box">
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
							800, Lorem Street, US
						</p>
					</div>
				</div>
			</div>
		</div>
	    </div>
        </Layout>
        )
    }
}