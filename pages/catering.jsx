import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import MenuCateringList from "../components/cp_catering";
import withData from "../utils/apollo";

export default withData(props => {


        return(
            <Layout>
                <Head>
                    <title key="title">Tikala - Catering</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                    <script async data-id="35739" src="https://cdn.widgetwhats.com/script.min.js"></script>
                    <script src="/static/assets/template/js/jquery-3.2.1.min.js"></script>
	                <script src="/static/assets/template/js/popper.min.js"></script>
	                <script src="/static/assets/template/js/bootstrap.min.js"></script>
	                <script src="/static/assets/template/js/jquery.superslides.min.js"></script>
	                <script src="/static/assets/template/js/images-loded.min.js"></script>
	                <script src="/static/assets/template/js/isotope.min.js"></script>
	                <script src="/static/assets/template/js/baguetteBox.min.js"></script>
	                <script src="/static/assets/template/js/form-validator.min.js"></script>
                    <script src="/static/assets/template/js/contact-form-script.js"></script>
                    <script src="/static/assets/template/js/custom.js"></script>
                </Head>
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Catering Package</h1>
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
                                    <h2>Our Package</h2>
                                    <p>The tasty taste never forget</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginBottom:"-5%"}}>
                            <div className="col-md-12">
                                <div className="heading-title">
                                    <h2>Wedding Package</h2>
                                    <p>The tasty taste never forget</p>
                                </div>
                            </div>
                        </div>
                        <MenuCateringList />
                        <div className="row" style={{marginBottom:"-5%",marginTop:"5%"}}>
                            <div className="col-md-12">
                                <div className="heading-title">
                                    <h2>Birthday Package</h2>
                                    <p>The tasty taste never forget</p>
                                </div>
                            </div>
                        </div>
                        <MenuCateringList />
                        <div className="row" style={{marginBottom:"-5%",marginTop:"5%"}}>
                            <div className="col-md-12">
                                <div className="heading-title">
                                    <h2>Meeting Package</h2>
                                    <p>The tasty taste never forget</p>
                                </div>
                            </div>
                        </div>
                        <MenuCateringList />
                    </div>
                </div>

                
                    <div className="container">
                        
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
    
})