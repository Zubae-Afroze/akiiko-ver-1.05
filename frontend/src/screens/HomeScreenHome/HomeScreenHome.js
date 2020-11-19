import React from 'react';
import { div, Row, Col } from 'react-bootstrap';
import HomeScreenHomeProducts from '../../assets/products/HomeScreenHomeProducts';
import { Link } from 'react-router-dom';
import './HomeScreenHome.css';

const HomeScreenHome = () => { 
    return (
        <div className='home-screen-component'>{/*container changed into div*/}
               <Row className='home-wrapper workout-cont'> {/*CLASS NAME*/}
                <Col sm={3} className='home-button-placement'>
                    <Link to='/home/all_products'><button className='home-button'>SHOP ALL</button></Link>
                </Col>
                <Col sm={9} className='home-wrapper'>  {/*CLASS NAME*/  }
                    <div className='home-title'>HOME</div>
                    <div className='home-text'>A simple yet inviting collection of 
                    natural fabric kitchen accessories that will blend harmoniously 
                    with every home’s mood & feel. Multi-purpose & vegan lunch bags, 
                    aprons & more.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5} className='hero-image-workout' > {/*    class was added here* / */}
                    <div className='workout-hero-image '>
                        <img src={'/images/home_screen_home_products/HomeScreenHomeHero.jpg'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7} className='workout-container'> {/*new class name changed*/}
                    <Row className='workout-card-wrapper'> {/*   class name changed - homecard name changed to workout*/}
                        {HomeScreenHomeProducts.map(product => (
                            <Col className='home-card-items' key={product.productId}>
                                <Link to={`/product/${product.productId}`}><div>
                                    <img className='home-card-image' src={product.heroImage} alt='home_1'/>
                                    <div className='home-card-title'>{product.productName}</div>
                                <div className='home-card-text'>View Details - &#x20B9;{product.price}</div>
                                </div></Link>
                                
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
             {/* <Row className='home-wrapper'>
                <Col sm={3} className='home-button-placement'>
                    <button className='home-button'>SHOP ALL</button>
                </Col>
                <Col sm={9} className='home-wrapper'>
                    <div className='home-title'>HOME</div>
                    <div className='home-text'>A simple yet inviting collection of 
                    natural fabric kitchen accessories that will blend harmoniously 
                    with every home’s mood & feel. Multi-purpose & vegan lunch bags, 
                    aprons & more.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <div className='home-hero-image'>
                        <img src={'/images/home_screen_home_products/HomeScreenHomeHero.png'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7} className='home-card-head'>
                    <Row className='home-card-wrapper'>
                        {HomeScreenHomeProducts.map(product => (
                            <Col className='home-card-items' key={product.productId}>
                                <div>
                                    <img className='home-card-image' src={product.heroImage} alt='home_1'/>
                                    <div className='home-card-title'>{product.productName}</div>
                                    <div className='home-card-text'>View Details - &#x20B9;{product.price}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row> */}
        </div>
    )
}

export default HomeScreenHome
