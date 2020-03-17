import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import PromoList from "../components/cp_promo";
import withData from "../utils/apollo";

export default withData(props => {

        return(
            <Layout>
                <Head>
                    <title key="title">Tikala - Promo</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                    <script async data-id="35739" src="https://cdn.widgetwhats.com/script.min.js"></script>
                </Head>
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Special Promo</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Promo List */}
                <PromoList />
        </Layout>
        );
    })