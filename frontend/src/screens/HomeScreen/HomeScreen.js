import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeScreenWomen from '../HomeScreenWomen/HomeScreenWomen';
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome';
import './HomeScreen.css';
import HomeScreenWorkout from '../HomeScreenWorkout/HomeScreenWorkout';

const HomeScreen = () => {
    return (
        <Container>
            <Row className='home-screen-container'> {/* class name added here */}
                <Col sm={4}>
                    <div className='hero-container'>
                        <div className='empty-div'></div>
                        <div className='hero-logo'>
                            akiiko
                        </div>
                        <div className='hero-text'>
                            vegan<br/>
                            utilitarian<br />
                            eco-friendly
                        </div>
                        <div className='hero-sub-text'>
                        </div>
                        <div className='hero-button'>
                        <Link to='/bags/all_products'><button>
                            Shop Now
                        </button></Link>
                        </div>
                    </div>
                </Col>
                <Col sm={8} className='carousel-wrapper' style={{'marginBottom':'80px'}}>
                <Carousel className='carousel-fade' pause={false} controls={false}>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_2.jpg'}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3 className='carousel-slide-1'>Introducing Akiiko</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_1.jpg'}
                        alt="Second slide"
                        />
                        <Carousel.Caption className='carousel-slide-2'>
                        {/* <Row className='footer-image-row'>
                            <Col className='footer-image-col-1' sm><div><img src={'/images/font_images/nature.svg'} alt='natural'/></div>NATURAL</Col>
                            <Col className='footer-image-col-2' sm><div><img src={'/images/font_images/organic.svg'} alt='organic'/></div>ORGANIC</Col>
                            <Col className='footer-image-col-3' sm><div><img src={'/images/font_images/sustainable.svg'} alt='sustainable'/></div>SUSTAINABLE</Col>
                        </Row > */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_3.jpg'}
                        alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-slide-3'>
                        {/* <Row className='footer-image-row'>
                            <Col className='footer-image-col-4' sm><div><img src={'/images/font_images/eco.svg'} alt='eco_friendly'/></div>ECO FRIENDLY</Col>
                            <Col className='footer-image-col-5' sm><div><img src={'/images/font_images/no_animal.svg'} alt='no_animal'/></div>NO ANIMAL SKIN</Col>
                            <Col className='footer-image-col-6' sm><div><img src={'/images/font_images/no_plastic.svg'} alt='no_plastic'/></div>NO PLASTIC</Col>
                        </Row> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_4.jpg'}
                        alt="Fourth slide"
                        />
                        {/* <Carousel.Caption className='carousel-slide-4'>
                        <h3>akiiko</h3>
                        <p>ALL UTILITY BAGS</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <HomeScreenWomen />
            <HomeScreenHome />
            <HomeScreenWorkout />
        </Container>
    )
}

export default HomeScreen
