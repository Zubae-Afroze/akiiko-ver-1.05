import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import './ProductDetails.css';


const ProductDetails = (props) => {

    const product = props.productInfo.find(p => p.productId === props.match.params.id);

    const [bigImageSrc, setImageSrc] = useState(product.heroImage);

    let [itemQuantity, setItemQuantity] = useState(1);

    const [dropMaterial, setDropMaterial] = useState('');

    const [dropThickness, setDropThickness] = useState('');

    return (
        <Container className='product-details-wrapper'>
        <Row>
            <Col xs={1} className='alt-img-list'> {/*hi*/}
            <ul>
                {product.images.map((prod, index) => (
                    <li key={index}><img onClick={() => setImageSrc(prod)} src={prod} alt='alt_image' /></li>
                ))}
            </ul>
            </Col>
            <Col xs={5} className='alt-img-hero-container'>
            <div className='alt-img-hero'>
                <img src={bigImageSrc} alt='alt_img'/>
            </div>
            </Col>
            <Col xs={6} className='product-det'> {/* cls name added*/}
                <div className='products-details-head'>{product.group}</div>
                <div className='products-details-label'>{product.productName}</div>
                <div className='products-details-price'>&#x20B9; {product.price}</div>
            <Row className='cart-det'>
            <Col className='material-det'>
                <Dropdown>
                    <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                        <div className='material-div'>MATERIAL:</div> <div className='material-dum'>{product.material}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => setDropMaterial('Cotton Canvas')}>{product.material}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className='material-det'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    <div className='thickness-div'>THICKNESS:</div> <div className='thickness-dum'>{product.thickness}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => setDropThickness('9 Ounce')}>{product.thickness}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>

            <Row className='cart-det'>
            <Col className='product-details-color'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    <div className='color-div'>Color:</div><div className='color-pick'></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Natural<div className='color-pick'></div></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>

                <Col className='product-details-quantity'>
                <div className='details-quantity'>
                <div className='quantity-div'>Quantity:</div>
                    <div className='quantity-dum'><span className='quantity-decrease' onClick={() => setItemQuantity(itemQuantity <= 1 ? itemQuantity = 1 : itemQuantity - 1)}>-</span>
                        {itemQuantity}
                    <span className='quantity-increase' onClick={() => setItemQuantity(itemQuantity + 1 )}>+</span></div>
                </div>
                </Col>
                </Row>
                <button className='product-purchase-button'>PURCHASE</button>
                <div className='product-description-label'>PRODUCT DESCRIPTION</div>
                <div className='product-description-text'>{product.description}</div>

                <div>
                    <div className='product-details-label'>Details</div>
                    <ul className='product-details-text'>
                    <li><span className='target-bold'>Item Code: </span> {product.productId}</li>
                    <li><span className='target-bold'>Size:</span> {product.measurement}</li>
                    <li><span className='target-bold'>Material:</span> {product.material}</li>
                    {/* <li>Care Instruction: {product.washingCare}</li> */}
                    </ul>
                </div>

                <div>
                    <div className='product-details-label'>Care Instruction</div>
                    <div className='product-details-text'>{product.washingCare}</div>
                </div>
                
            </Col>
        </Row>
        {product.addOns !== '' ? 
        <Row>
            <Col>
                    
            </Col>
        </Row>
        : null}

        <Row>
            {/* Similar Products */}
        </Row>
        </Container>
    )
}

export default ProductDetails
