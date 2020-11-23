import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductList.css';


const ProductList = (props) => {
    return (
        <Container>
            <div className='product-list-wrapper'> {/* container changed as div*/}
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            <div className='product-list-label'>{props.productListLabel}</div>
            <div className='product-list-text'>{props.productListText}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {props.productDetails.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <div className='product-list-image'>
                                <img src={product.lifestyleImage} alt='home_1'/>
                            </div>
                            <Link to={`/product/${product.productId}`}><div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
             {/* <Container/>
                <div className='product-list-label'>{props.similarProductListLabel}</div>
                <div className='product-list-text'>{props.similarProductListText}</div>
                <Container>
                <Row className='product-list-card-wrapper'>
                    {props.similarProductDetails.map(product => (
                        <Link key={product._id}><div className='product-list-card-wrapper'>
                            <div className='product-list-image'>
                                <img src={product.image} alt='home_1'/>
                            </div>
                            <div className='product-list-card-title'>{product.name}</div>
                        </div></Link>
                    ))}
                </Row>
                </Container> */}
            
            </div>
        </Container>
    )
}

export default ProductList
