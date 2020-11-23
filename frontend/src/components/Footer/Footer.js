import React, { Component } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className='footer-brand-wrapper'> 
                <Container className='footer-brand-container'>
                    <Row className='footer-brand'>
                        <Col sm={5} className='footer-brand-section-one'>
                            <div className='footer-brand-logo'>
                                akiiko
                            </div>
                            <div className='footer-brand-text'>
                            Akiiko is an eco-friendly brand. We create wide range of natural fabric utility products for everyday. We value the power of functionality and design to find joy in simplicity. 
                            </div>
                            <div className='footer-brand-button'>
                                <button className='footer-button'>
                                    Discover more
                                </button>
                            </div>
                        </Col>
                        <Col sm={7} className='font-wrapper footer-brand-section-two'>  {/* class name is given to adjust the width of the container*/}
                        <Row className='footer-image-row'>
                            <Col className='footer-image-col-1 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/nature.svg'} alt='natural'/></div>NATURAL</Col>
                            <Col className='footer-image-col-4 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/organic.svg'} alt='natural'/></div>ORGANIC</Col>
                            <Col className='footer-image-col-3 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/sustainable.svg'} alt='natural'/></div>SUSTAINABLE</Col>
                        </Row >
                        <Row className='footer-image-row'>
                            <Col className='footer-image-col-4 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/eco.svg'} alt='natural'/></div>ECO FRIENDLY</Col>
                            <Col className='footer-image-col-5 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/no_animal.svg'} alt='natural'/></div>NO ANIMAL SKIN</Col>
                            <Col className='footer-image-col-6 col-sm-4 footer-icons' sm><div><img src={'/images/font_images/no_plastic.svg'} alt='natural'/></div>NO PLASTIC</Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className='footer-main-wrapper'>
                <Container>
                    <Row className='footer-main'>
                        <Col sm={5}>
                            <div className='footer-main-label'>Available At</div>
                            <div className='footer-main-text'>
                                <p>
                                Level 15, 26-1 <br/>
                                Sakuragaoka-cho Shibuya-ku,  <br/>
                                Tokyo, 150-8512 <br/>
                                </p>
                            </div>
                        </Col>
                        <Col sm={7} className='enquire col-sm-6'> {/* enuire form class*/}
                        <div className='footer-main-label-2'>Enquire At</div>
                            <Form inline>
                                <input type="text" placeholder="Your email Id" className='footer-main-form'/>
                                <button className='footer-main-button'>Send</button>
                            </Form>
                        </Col>
                        <div className='footer-social-icons-wrapper'>
                        <ul className='footer-social-icons'>
                            <li><a href='https://www.instagram.com/akiiko_india/' target='_blank' rel="noreferrer"><i className="lni lni-instagram-filled"></i></a></li> 
                            <li><a href='https://www.facebook.com/akiikoindia/' target='_blank' rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                            <li><a href='/'><i className="lni lni-linkedin-original"></i></a></li>
                            <li><a href='/'><i className="lni lni-pinterest"></i></a></li>
                            <li><a href='/'><i className="lni lni-twitter-original"></i></a></li>
                            <li><a href='/'><i className="lni lni-youtube"></i></a></li>
                        </ul>
                    </div> 
                    </Row>
                    <div className='very-end-blyat'>
                        <ul className='very-end-blyat-list'>
                            <li>ABOUT US</li>
                            <li>CAREERS</li>
                            <li>HELP</li>
                            <li>FAQs</li>
                            <li>TERMS</li>
                        </ul>
                    </div>
                </Container>
            </div>
            </>
        )
    }
}
