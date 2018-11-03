import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, Jumbotron, Container, Row, Col, Button} from 'reactstrap';

export default class login extends Component {
	state={

	}
	render() {
    return (
    <div className="login">
      <div className="header">
        <Container>
          <Row>
            <Col>
              <h1>Login</h1>
            </Col>
          </Row>
        </Container>
        <br />
          <Form>
            <FormGroup row>
              <Label for="studentTeacher" sm={2}>Username</Label>
                <Col sm={6}>
                  <Input type="Username" name="username" id="username"/>
                </Col>
            </FormGroup>
              
              <FormGroup row>
                <Label for="password" sm={2}>Password </Label>
                  <Col sm={6}>
                    <Input type="password" name="password" id="password"/>
                  </Col>
              </FormGroup>
            <Button color="primary">Submit</Button>{' '}
          </Form>

      </div>
    </div>
        
    );
  }
}