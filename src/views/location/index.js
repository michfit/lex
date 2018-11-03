import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, Jumbotron, Container, Row, Col, Button} from 'reactstrap';

export default class location extends Component {
	state={

	}
	render() {
    return (
    <Form>
      <FormGroup row>
        <Label for="studentTeacher" sm={2}>I live in</Label>
          <Col sm={2}>
            <Input type="zip" name="zip" id="zip" placeholder="Zip Code" />
          </Col>
      </FormGroup>
        
        <FormGroup row>
          <Label for="lookingFor" sm={2}>and am </Label>
            <Col sm={2}>
              <Input type="age" name="age" id="age" placeholder="Age" />
            </Col>
        </FormGroup>
      
    </Form>
        
    );
  }
}