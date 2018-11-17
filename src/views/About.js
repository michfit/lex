import React, { Component } from 'react';
import { Col, Row, Container, Label } from 'reactstrap';

export default class AboutUs extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col sm="8">
                            <h1>L.E.X</h1>
                            <h5>About Us</h5>
                            <p className="justify">We are a group a UCLA students that are on a mission
                                to connect people through language.
                            </p>
                        </Col>
                        <Col sm="4">
                            <p>Contact Us</p>
                            <br />
                            <p>FAQ</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const links = {
    color: "#FFFFFF",
    textDecoration: "none"
}