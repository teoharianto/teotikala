import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default class CateringPage extends React.Component{

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
                    <title key="title">Tikala - Catering</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                </Head>
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Special Menu</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="menu-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title text-center">
                                    <h2>Special Menu</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="special-menu text-center">
                                    <div className="button-group filter-button-group">
                                        <button className="active" data-filter="*">All</button>
							            <button data-filter=".drinks">Drinks</button>
							            <button data-filter=".lunch">Lunch</button>
							            <button data-filter=".dinner">Dinner</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row special-list">
                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="/static/assets/template/images/img-01.jpg" className="img-fluid" alt="Image" />
                                        <div className="why-text">
                                            <h4>Special Drinks 1</h4>
                                            <p>Sed id magna vitae eros sagittis euismod.</p>
                                            <h5> $7.79</h5>
                                        </div>
					            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="/static/assets/template/images/img-02.jpg" className="img-fluid" alt="Image" />
                                        <div className="why-text">
                                            <h4>Special Drinks 2</h4>
                                            <p>Sed id magna vitae eros sagittis euismod.</p>
                                            <h5> $9.79</h5>
                                        </div>
					            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="/static/assets/template/images/img-03.jpg" className="img-fluid" alt="Image" />
                                        <div className="why-text">
                                            <h4>Special Drinks 3</h4>
                                            <p>Sed id magna vitae eros sagittis euismod.</p>
                                            <h5> $10.79</h5>
                                        </div>
					            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 special-grid lunch">
                                <div class="gallery-single fix">
                                    <img src="/static/assets/template/images/img-04.jpg" class="img-fluid" alt="Image" />
                                        <div class="why-text">
                                            <h4>Special Lunch 1</h4>
                                            <p>Sed id magna vitae eros sagittis euismod.</p>
                                            <h5> $15.79</h5>
                                        </div>
					            </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Quote */}
                <div className="qt-box qt-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto text-left">
                                <p className="lead ">
                                    " If you're not the one cooking, stay out of the way and compliment the chef. "
					            </p>
                                <span className="lead">Michael Strahan</span>
                            </div>
                        </div>
                    </div>
                </div>

        </Layout>
        )
    }
}