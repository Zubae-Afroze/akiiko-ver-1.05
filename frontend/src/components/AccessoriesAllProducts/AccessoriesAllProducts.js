import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const AccessoriesAllProducts = (props) => {
    return (
    <Container>
        <div className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
        <div className='product-list-label'>{props.onthegoProductListLabel}</div>
        <div className='product-list-text'>{props.onthegoProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.onthegoProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.heroImage} alt='home_1'/>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                        </div>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.walletProductListLabel}</div>
        <div className='product-list-text'>{props.walletProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.walletProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.heroImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </div>
        {/* <div className='product-list-label'>{props.accessoriesProductListLabel}</div>
        <div className='product-list-text'>{props.accessoriesProductListText}</div>
        <Container>
            <Row className='product-list-card-wrapper'>
                {props.accessoriesProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.heroImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </Container> */}
        {/* <div className='product-list-label'>{props.travelProductListLabel}</div>
        <div className='product-list-text'>{props.travelProductListText}</div>
        <Container>
            <Row className='product-list-card-wrapper'>
                {props.travelProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.heroImage} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product.productId}`}>View Details - &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </Container> */}
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

export default AccessoriesAllProducts
