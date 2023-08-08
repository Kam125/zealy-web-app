import React from 'react'
import { Row, Col } from "reactstrap";
import logo from '../assets/images/logo.png'

function Footer() {
    return (
        <div className='footer text-start'>
            <Row className='mb-5'>
                <Col xl='5' md='12'>
                    <img src={logo} alt='' />
                    <p>Become part of the most exciting communities in the world.
                        Explore new horizons, achieve the impossible, and make a difference
                        - all while having fun and earning rewards. It's that simple.</p>
                </Col>
                <Col xl='6' md='12' className='ms-auto'>
                    <Row>
                        <Col>
                            <h6>LEARN</h6>
                            <p>Blog</p>
                            <p>FAQ's</p>
                            <p>Documentation</p>
                        </Col>
                        <Col>
                            <h6>GET STARTED</h6>
                            <p>Blog</p>
                            <p>FAQ's</p>
                            <p>Documentation</p>
                        </Col>
                        <Col>
                            <h6>RESOURCES</h6>
                            <p>Blog</p>
                            <p>FAQ's</p>
                            <p>Documentation</p>
                            <p>FAQ's</p>
                            <p>Documentation</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Row>
                        <p>2023 Freyja Labs</p>
                        <p>Privacy Policy</p>
                        <p>Cokies</p>
                        <p>Terms of Use</p>
                    </Row>
                </Col>
                <Col xs='auto'>
                    <Row>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-discord"></i>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default Footer