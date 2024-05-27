import React from 'react';
import '../App.css';


function About() {
    return (
        <div>
            <div className="about-section">
                <h1>About Alibaba</h1>
                <div className="vision-mission">
                    <div className="vision">
                        <h2>Vision</h2>
                        <p>Our vision at Alibaba is to redefine the way you shop for clothing online. We strive to curate a diverse collection of fashion-forward apparel that caters to every style and occasion, ensuring that you always look and feel your best.</p>
                    </div>
                    <div className="mission">
                        <h2>Mission</h2>
                        <p>Driven by a passion for fashion, our mission is to empower individuals to express their unique sense of style through our curated selection of clothing and accessories. We're committed to delivering exceptional customer service and value to each and every shopper.</p>
                    </div>
                </div>
                <div className="what-sets-us-apart">
                    <h2 className="sets-us-apart">What Sets Us Apart</h2>
                    <ul>
                        <li><strong>Wide Range of Products:</strong> From casual wear to formal attire, we offer a wide range of clothing options for every occasion.</li>
                        <li><strong>Quality Assurance:</strong> We prioritize quality and craftsmanship, ensuring that every garment meets our high standards.</li>
                        <li><strong>Trendsetting Designs:</strong> Stay ahead of the fashion curve with our constantly updated collection of trendsetting designs and styles.</li>
                        <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We're here to assist you every step of the way, from browsing to checkout.</li>
                    </ul>
                </div>
            </div>


            <h2 style={{textAlign: "center"}}>Our Team</h2>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="https://octaveanalytics.com/wp-content/uploads/2018/04/Testimonials-image01.png" alt="Jane" style={{width: "100%"}} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="https://www.transitivemanagement.com/files/uploads/2013/11/dummy_team_member.jpg" alt="Mike" style={{width: "100%"}} />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="https://api.intertravels.ca/assets/uploads/9aw4rxmmQ8wiGMnI0QI4ECTk7thngM3tRAS1QwwB.jpg" alt="John" style={{width: "100%"}} />
                        <div className="container">
                            <h2>Alfred pipe</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}




            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility:"visible", animationDelay:"0.2s", animationName:"fadeInLeft"}}>
                                    <h3>Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{display:"none"}}></p>
                                        <p className="mchimp-sucmessage" style={{display:"none"}}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility:"visible", animationDelay:"0.4s", animationName:"fadeInLeft"}}>
                                    <h3>Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Shopping Bags</a></li>
                                        <li><a href="#">ios App</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility:"visible", animationDelay:"0.6s", animationName:"fadeInLeft"}}>
                                    <h3>Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="social-container">
                            <ul className="social-icons">                                                 
                                <h3>Follow us on</h3>
                                    <li><a href="https://www.instagram.com/alibaba.com_official/?hl=en"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/AlibabaGroup"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/alibaba-com"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="https://codepen.io/xieyongchun/pen/aaWJdz"><i className="fa-brands fa-square-facebook"></i></a></li>
                                </ul>
                            </div>
  

                </div>
                <div className="footer_bottom">
                    <div className="container"> 
                        <p className="mb-0 f_400 text-center">© Alibaba Inc.. 2024 All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default About;
