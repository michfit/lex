import React, { Component } from 'react';
import { Form, FormGroup, Media, Label, Input, FormText, Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import Navigation from './Navbar'

export default class SignUp extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <Container>
                    <h2>Sign Up</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                              <Label>Email</Label>
                              <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="joebruin@ucla.edu"
                              />
                            </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label>Password</Label>
                            <Input 
                              type="password"
                              name="password"
                              id="examplePassword"
                              placeholder="********"
                            />
                          </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}