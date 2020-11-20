import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import emailjs from 'emailjs-com';

import ReactImageMagnify from 'react-image-magnify';

import './ProductDetails.css';

const ProductDetails = (props) => {

    const product = props.productInfo.find(p => p.productId === props.match.params.id);

    const [bigImageSrc, setImageSrc] = useState(product.heroImage);

    // const initialFormData = Object.freeze({
    //     fname: '',
    //     lname: '',
    //     email: '',
    //     phone: '',
    //     address: ''
    // });

    
    // const [formData, updateFormData] = useState(initialFormData);
        
    // const handleChange = (e) => {
    //     updateFormData({
    //         ...formData,
    
    //         // Trimming any whitespace
    //         [e.target.name]: e.target.value.trim()
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(formData);
    //     // ... submit to API or something
    // };

        
    
    let [itemQuantity, setItemQuantity] = useState(1);

    let emailParams = {
        productId: product.productId,
        productName: product.productName,
    };
    
    function emailTest() {
    emailjs.send('service_0gyrynb', 'template_1sohpy9', emailParams, 'user_MWfMIz4lhzaCvONbRdLAM')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED!', error);
        })
    }

    function NextModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <p>
                Thank you for your Purchase, our team will get in touch with you shortly.
              </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/product/${product.productId}`}><button type='reset' className='modal-cont-button' onClick={props.onHide}>CONTINUE SHOPPING</button></Link>
            </Modal.Footer>
          </Modal>
        );
    }

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title> */}
              <Modal.Title name={product.productName}>
                {product.productName}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col className='modal-wrapper'>
                    <p className='modal-intro-text'>Please fill out your information, to continue with the purchase</p>
                    <form className='modal-form'>
                        <input type='text' placeholder='First Name' name='fname' className='modal-input modal-first'></input>
                        <input type='text' placeholder='Last Name' name='lname' className='modal-input modal-last'></input><br></br>
                        <input type='text' placeholder='Email Address' name='email' className='modal-input modal-email'></input><br></br>
                        <input type='number' placeholder='Phone Number' name='phone' className='modal-input modal-phone'></input><br></br>
                        <textarea type='text' id='madd' placeholder='Address' name='address' className='modal-input modal-address'></textarea><br></br>

                        <div className='modal-prd-det'><span className='target-bold'>Product Material:</span> {product.material}</div>
                        <div className='modal-prd-det'><span className='target-bold'>Product Thickness:</span> {product.thickness}</div>
                        <div name={itemQuantity} className='modal-prd-det'><span className='target-bold'>Item Quantity:</span> {itemQuantity}</div>
                    </form>
                </Col>
                <Col className='modal-img'>
                    <img src={product.heroImage} alt='modal_img' style={{'marginBottom':'20px'}}/>
                    <div>
                    <div className='modal-det-label'>Details</div>
                    <ul className='modal-det-text'>
                    <li><span name={product.productId} className='target-bold'>Item Code: </span> {product.productId}</li>
                    <li><span className='target-bold'>Size:</span> {product.measurement}</li>
                    <li><span className='target-bold'>Material:</span> {product.material}</li>
                    {/* <li>Care Instruction: {product.washingCare}</li> */}
                    </ul>
                </div>

                <span className='modal-price'><span className='target-bold'>Price:</span> &#x20B9;{product.price * itemQuantity}</span>
                <button className='modal-check-button' onClick={() => {setNextModalShow(true); setModalShow(false);}} onMouseDown={"mouse down"}>CHECK OUT</button>
                </Col>
            </Row>
            </Modal.Body>
            {/* <Modal.Footer>
              <button className='modal-close-button' onClick={props.onHide}>Close</button>
            </Modal.Footer> */}
          </Modal>
        );
      }
      
    const [modalShow, setModalShow] = useState(false);

    const [nextModalShow, setNextModalShow] = useState(false);

    const [dropMaterial, setDropMaterial] = useState(<i className="lni lni-chevron-down"></i>);

    const [dropThickness, setDropThickness] = useState(<i className="lni lni-chevron-down"></i>);

    return (
        <Container>
        <div className='product-details-wrapper'>
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
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'big_img',
                    src: bigImageSrc,
                    isFluidWidth: true,
                },
                largeImage: {
                    src: bigImageSrc,
                    width: 1600,
                    height: 1600
                },
                enlargedImageContainerClassName	: 'mag-img-cont',
                enlargedImageClassName: 'mag-img',
                imageClassName: 'img-hero-wrap',
            }} />
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
                        <div className='material-div'>MATERIAL:</div> <div className='material-dum'>{dropMaterial}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => setDropMaterial('Cotton Canvas')}>{product.material}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className='material-det'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    <div className='thickness-div'>THICKNESS:</div> <div className='thickness-dum'>{dropThickness}</div>
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
                <button className='product-purchase-button' type='reset' onClick={() => setModalShow(true)}>PURCHASE</button>
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <NextModal
                show={nextModalShow}
                onHide={() => setNextModalShow(false)}
            />
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
        </div>
        </Container>
    )
}

export default ProductDetails
