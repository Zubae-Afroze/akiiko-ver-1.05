import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import HomeScreenWomen from '../HomeScreenWomen/HomeScreenWomen';
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome';
import './HomeScreen.css';
import HomeScreenWorkout from '../HomeScreenWorkout/HomeScreenWorkout';

const HomeScreen = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <div className='hero-container'>
                        <div className='empty-div'></div>
                        <div className='hero-logo'>
                            akiiko
                        </div>
                        <div className='hero-text'>
                            Natural<br/>
                            Eco Friendly
                        </div>
                        <div className='hero-sub-text'>
                            All Utility bag
                        </div>
                        <div className='hero-button'>
                        <button>
                            Shop Now
                        </button>
                        </div>
                    </div>
                </Col>
                <Col sm={8} className='carousel-wrapper'>
                <Carousel className='carousel-fade'>
                    <Carousel.Item interval={3200}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_2.jpg'}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3 className='carousel-slide-1'>Introducing Akiiko</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={3200}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_1.jpg'}
                        alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-slide-2'>
                        {/* <Row className='footer-image-row'>
                            <Col className='footer-image-col-1' sm><div><img src={'/images/font_images/nature.svg'} alt='natural'/></div>NATURAL</Col>
                            <Col className='footer-image-col-2' sm><div><img src={'/images/font_images/organic.svg'} alt='organic'/></div>ORGANIC</Col>
                            <Col className='footer-image-col-3' sm><div><img src={'/images/font_images/sustainable.svg'} alt='sustainable'/></div>SUSTAINABLE</Col>
                        </Row > */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3200}>
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
                    <Carousel.Item interval={3200}>
                        <img
                        className="d-block w-100"
                        src={'/images/carousel_images/carousel_4.jpg'}
                        alt="Third slide"
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
