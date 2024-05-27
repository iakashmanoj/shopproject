import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/luminati-io/Amazon-popular-books-dataset/main/Amazon_popular_books_dataset.json');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        className: 'carousel'
    };

    return (
        <div>


            <div className="carousel-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg" alt="Image 1" />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg" alt="Image 2" />
                    </div>
                    <div>
                        <img src="https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg" alt="Image 3" />
                    </div>
                </Slider>
            </div>


            <div class="categories">
                <h2>Explore Categories</h2>
                <div class="category-card">
                    <div class="category-img">
                        <img src="https://www.suitsexpert.com/wp-content/uploads/suitsupply-men-suits.jpg" />
                        <div class="category-overlay">
                            <button class="explore-btn">Explore</button>
                        </div>
                    </div>
                    <div class="category-details">
                        <p>50% Off</p>
                        <h2>Mens</h2>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">
                        <img src="https://www.shutterstock.com/image-photo/beautiful-woman-fashion-model-makeup-600nw-1918687337.jpg" alt="Womens Category" />
                        <div class="category-overlay">
                            <button class="explore-btn">Explore</button>
                        </div>
                    </div>
                    <div class="category-details">
                        <p>30% Off</p>
                        <h2>Womens</h2>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">
                        <img src="https://saradresses.com/cdn/shop/files/DSC04209BG_RBE4_15.jpg?crop=center&height=1500&v=1691006688&width=1500" alt="Kids Category" />
                        <div class="category-overlay">
                            <button class="explore-btn">Explore</button>
                        </div>
                    </div>
                    <div class="category-details">
                        <p>20% Off</p>
                        <h2>Kids</h2>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">
                        <img src="https://wishnwed-blog-media.s3.ap-southeast-1.amazonaws.com/wordpress/uploads/2020/07/95905268_2608500016088970_7134719030437918139_n.jpg" alt="Wedding Dress Category" />
                        <div class="category-overlay">
                            <button class="explore-btn">Explore</button>
                        </div>
                    </div>
                    <div class="category-details">
                        <p>40% Off</p>
                        <h2>Wedding Dress</h2>
                    </div>
                </div>
            </div>






            {/* Fetching data to show on screen */}


            <div className="home-container">
                <div className="product-list">
                    {items.map(item => (
                        <div className="card" key={item.id}>
                            <img src={item.image_url} alt='' />
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





            <div className="new-banner">
                <img src="https://storage.googleapis.com/macrovector-acl-eu/previews/42627/preview_42627.jpg" />
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

export default Home;
