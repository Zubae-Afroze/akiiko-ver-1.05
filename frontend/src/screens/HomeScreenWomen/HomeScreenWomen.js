import React from 'react'
import { div, Row, Col } from 'react-bootstrap';
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
                    <button className='women-button'>SHOP ALL</button>
                </Col>
            </Row>
            <Row className='women-card-wrapper'>
                {HomeScreenWomenProducts.map(product => (
                    <Col lg={2.6} key={product.productId} className='women-shop-bag-container'> {/*class name added */}
                    <Link to='/bags/all_products'><div className='women-card-image'>
                        <img src={product.heroImage} alt='women_1'/>
                        <div className='women-card-title'>{product.productName}</div>
                    <div className='women-card-text'>View Details - &#x20B9;{product.price}</div>
                    </div></Link>
                    
                    </Col>
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
            </Row> */}
        </div>
    )
}

export default HomeScreenWomen
