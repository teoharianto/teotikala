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
					<script async data-id="33184" src="https://cdn.widgetwhats.com/script.min.js"></script>
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
						<h1>Selamat Datang di <span>Tikala</span></h1>
						<h4>Tikala Bistro dan Katering</h4>
						<br />
						<p>Tikala Bistro adalah member dari MTH Corp (MTH Global Investama, PT). Berdiri pada April 2019, Tikala Bistro memiliki konsep gabungan antara masakan Manado dengan masakan Indonesia lainnya.</p>
						<p>Kebersihan dan kualitas adalah prioritas utama kami. Dengan bahan-bahan yang segar, beserta konsep yang modern dan sehat, kami berkomitmen untuk menyediakan makanan terbaik yang bermutu tinggi.</p>
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
						<h2>Galeri Tikala</h2>
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
        </Layout>
        
        )
        
})
