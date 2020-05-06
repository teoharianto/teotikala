import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default class AboutPage extends React.Component{
    render(){
        return(
            <Layout>
                <Head>
                    <title key="title">Tikala - About</title>
                    <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                    <script async data-id="33184" src="https://cdn.widgetwhats.com/script.min.js"></script>
                </Head>
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>About</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start About */}

                <div class="about-section-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <img src="/static/assets/template/images/about-img.jpg" alt="" class="img-fluid" />
				            </div>
                            <div class="col-lg-6 col-md-6 text-center">
                                <div class="inner-column">
                                    <h1>Welcome To <span>Yamifood Restaurant</span></h1>
                                    <h4>Little Story</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
                                    <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                                    <a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="inner-pt">
                                    <p>Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida. Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit. </p>
                                    <p>Integer purus velit, eleifend eu magna volutpat, porttitor blandit lectus. Aenean risus odio, efficitur quis erat eget, mattis tristique arcu. Fusce in ante enim. Integer consectetur elit nec laoreet rutrum. Mauris porta turpis nec tellus accumsan pellentesque. Morbi non quam tempus, convallis urna in, cursus mauris. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </Layout>
        )
    }
}