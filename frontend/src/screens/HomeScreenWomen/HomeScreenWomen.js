import React from 'react'
import { Row, Col } from 'react-bootstrap';
import HomeScreenWomenProducts from '../../assets/products/HomeScreenWomenProducts';
import { Link } from 'react-router-dom';
import './HomeScreenWomen.css';

const HomeScreenWomen = () => {
    return (
        <div> {/**container class changed as div*/}
                 <Row className='women-wrapper'>
                <Col sm={9} className='women-wrap'>
                    <div className='home-title women-title'>BAGS </div>
                    <div className='women-text'>A delightful range of sustainable bags that are designed 
                        to perfection. Minimal, yet classic silhouettes to 
                        compliment just about every look, 
                        multipurpose & eye-catching.</div>
                    
                </Col>
                <Col sm={3} className='women-button-placement'>
                    <Link to='/bags/all_products'><button className='women-button'>SHOP ALL</button></Link>
                </Col>
            </Row>
            <Row className='women-card-wrapper '>
                {HomeScreenWomenProducts.map(product => (
                    <Link to={`/product/${product.productId}`}>
                    <Col lg={2.6} key={product.productId} className='women-shop-bag-container'> {/*class name added */}
                    <div className='women-card-image'>
                        <img src={product.heroImage} alt='women_1'/>
                        {product.bestSeller !== "" ? <span className='label-best'>{product.bestSeller}</span> : null}
                        {product.quickView !== "" ? <span className='label-view'>{product.quickView}</span> : null}
                        <div className='women-card-title'>{product.productName}</div>
                    <div className='women-card-text'>View Details - &#x20B9;{product.price}</div>
                    </div>
                    </Col>
                    </Link>
                ))} 
            </Row>
            {/* <Row className='women-wrapper'>
                <Col sm={9}>
                    <div className='women-title'>WOMEN</div>
                    <div className='women-title-sub'>SHOPPING BAGS</div>
                    <div className='women-text'>A delightful range of sustainable bags that are designed 
                        to perfection. Minimal, yet classic silhouettes to 
                        compliment just about every look, 
                        multipurpose & eye-catching.</div>
                </Col>
                <Col sm={3} className='women-button-placement'>
                    <button className='women-button'>SHOP ALL</button>
                </Col>
            </Row>
            <Row className='women-card-wrapper'>
                {HomeScreenWomenProducts.map(product => (
                    <Col key={product.productId}><a href='/'>
                    <div className='women-card-image'>
                        <img src={product.heroImage} alt='women_1'/>
                        <div className='women-card-title'>{product.productName}</div>
                        <div className='women-card-text'>View Details - &#x20B9;{product.price}</div>
                    </div>
                    </a>
                    </Col>
                ))}
            </Row> */} <div className='hero-button mobile-view-button'>{/*button added*/}
                        <Link to='/bags/all_products'><button>
                            Shop Now
                        </button></Link>
                        </div>
        </div>
    )
}

export default HomeScreenWomen
