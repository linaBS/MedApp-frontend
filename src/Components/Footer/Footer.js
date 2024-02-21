import React from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import '../Footer/Footer.css'
import backgroundImage from '../../Images/background.png'




const footerQuickLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About US",
        url: "#",
    },

    {
        display: "Courses",
        url: "#",
    },

    {
        display: "Blog",
        url: "#",
    },
];

const footerInfoLinks = [
    {
        display: "Find a Doctor",
        url: "#",
    },
    {
        display: "Request an Appoinment",
        url: "#",
    },

    {
        display: "Find a Location",
        url: "#",
    },

    {
        display: "Get a Opinion",
        url: "#",
    },
];

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div>

                <Row>
                    <Col lg="3" md="6" className="mb-4">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i class="ri-hospital-line"></i>MedApp.
                        </h2>
                        <div className="follows">
                            <p className="mb-0">Follow us on social media</p>
                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-twitter-line"></i>
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">Explore</h6>
                        <ListGroup className="link__list">
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">I Want To</h6>
                        <ListGroup className="link__list">
                            {footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="6">
                        <h6 className="fw-bold">Get in Touch</h6>

                        <p>Address: Sfax, Tunisie</p>
                        <p> Phone: +216 98456123 </p>
                        <p>Email: MedApp@gmail.com</p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
