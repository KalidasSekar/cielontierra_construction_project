import React from "react";
import './Home.css';
import banner1 from '../Home/images/carousel/first_banner.jpg';
import banner2 from '../Home/images/carousel/banner2.jpeg';
import banner3 from '../Home/images/carousel/grey-geometrical-shapes-background.jpg';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <section>
            <div className="carousel_container">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <section>
                            <div className="first_banner_content">
                                <ul className="header_text">
                                    <li>
                                        <i className="first_banner_header1">Welcome to</i>
                                    </li>
                                    <li>
                                        <i className="first_banner_header2">Cielo 'N' Tierra</i><br />
                                        <i className="first_banner_sub_header">Crafting your Curiosity</i>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                        {/* 
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                        {/* 
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Home;