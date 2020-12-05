import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import './footer.css';

export default class Footerlink extends Component {
render(){
    return (
        <Container>
        <Row>
            <div>
                <Col lg={4}>
                    <div>

                    </div>
                </Col>
                <Col lg={8}>
                    <div>
                        
                    </div>
                </Col>
            </div>
        </Row>
        <Row>
            <div>
                <Col lg={8}>
                    <div>

                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        
                    </div>
                </Col>
            </div>
        </Row>
        </Container>
    )
}

}