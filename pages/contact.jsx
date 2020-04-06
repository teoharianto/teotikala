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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
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

                            </div>
                        </div>

           {/* Footer Contact */}
           
         </Layout>
        )
    }
}