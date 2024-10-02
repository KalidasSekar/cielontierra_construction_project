import React from "react";
import '../Contact/Contact.css';
import contact_banner from "../Contact/Images/contactus_banner1.jpg";
import right_container_background from "../Contact/Images/top-view-chat-bubbles-with-telephone-receiver-copy-space.jpg";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {

    return (
        <section>
            <div className="contact_container">
                {/* <div className="contactUs_header"><i className="contactUs_text">Contact Us</i></div> */}


                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-12">
                            <div className="banner_contactus_page">
                                <figure>
                                    <img src={contact_banner} alt="contact_banner" width={"100%"} />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div class="row center_contact_container">
                        <div class="col-sm-6 container-contact left">
                            <div className="left_container__address_info">
                                <ul>
                                    <li className="left_container_list_content">
                                        <i className="left_container_header"><b>We are here</b></i>
                                        <hr></hr>
                                        <p className="content_contact_left_container">Welcome to our Construction Company website! We are a leading construction company dedicated to providing high-quality construction services to our clients. Our team of skilled professionals is committed to delivering projects on time, within budget, and to the highest standards of quality.</p>
                                        <p className="content_contact_left_container">At our Construction Company, we place a strong emphasis on quality, safety, and sustainability. We use the latest technology and equipment to ensure that our projects are completed to the highest standards of quality, and we are committed to ensuring that our work is safe and sustainable.

                                            If you're looking for a reliable and experienced construction company for your next project, look no further than our Construction Company. Contact us today to learn more about our services and how we can help you achieve your construction goals.</p>
                                        <p className="content_contact_left_container"><FmdGoodIcon className="nav_icon" />Address: 1379 Shoreline Parkway, Mountain View, CA 94043, United States </p>
                                        <p className="content_contact_left_container"><PhoneIcon className="nav_icon" />Phone: +91 9940-581-515</p>
                                        <p className="content_contact_left_container"><EmailIcon className="nav_icon" />E-mail: contact@construction.com</p>
                                    </li>
                                </ul>
                            </div>

                        </div>



                        <div class="col-sm-5 container-contact right">
                            <div className="right_container__contact_form">
                                {/* <img src={right_container_background} alt="contact_banner" width={"100%"} /> */}
                                <Card className="form_card">

                                    <form>
                                        {/* <div><img src={ } /></div> */}
                                        <div className="right_header_container"><i className="right_header_content">GET IN TOUCH WITH US</i></div>
                                        <div class="form-floating mb-3">
                                            <input type="name" class="form-control" id="floatingInput" />
                                            <label className="form-label" for="floatingInput">Name</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" />
                                            <label className="form-label" for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="phonenumber" class="form-control" id="floatingPassword" />
                                            <label className="form-label" for="floatingPassword">Contact Number</label>
                                        </div>
                                        <button type="button" class="btn btn-secondary">Submit</button>
                                    </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Contact;