import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const BagAllProducts = (props) => {
    return (
    <Container>
        <div className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
        <div className='product-list-label'>{props.womenProductListLabel}</div>
        <div className='product-list-text'>{props.womenProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.womenProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.lifestyleImage} alt='home_1'/>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                        </div>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.toteProductListLabel}</div>
        <div className='product-list-text'>{props.toteProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.toteProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.lifestyleImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.officeProductListLabel}</div>
        <div className='product-list-text'>{props.officeProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.officeProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.lifestyleImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.travelProductListLabel}</div>
        <div className='product-list-text'>{props.travelProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.travelProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.lifestyleImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </div>
        {/* <Container>
                <div className='product-list-label'>{props.similarProductListLabel}</div>
                <div className='product-list-text'>{props.similarProductListText}</div>
                <Container>
                <Row className='product-list-card-wrapper'>
                    {props.similarProductDetails.map(product => (
                        <div className='product-list-card-wrapper' key={product._id}>
                            <div className='product-list-image'>
                                <img src={product.image} alt='home_1'/>
                            </div>
                            <div className='product-list-card-title'>{product.name}</div>
                        </div>
                    ))}
                </Row>
                </Container>
        </Container> */}
        </div>
    </Container>
    )
}

export default BagAllProducts
