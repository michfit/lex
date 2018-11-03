import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, Jumbotron, Container, Row, Col, Button} from 'reactstrap';

export default class Home extends Component {
	state={

	}
	render() {
    return (
      <div className="Home">
        <div className="Jumbotron">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Language Exchange</h1>
                <p className="lead">This is for the language exchange project.</p> 
            </Container>
          </Jumbotron>
        </div>

        <Form>
          <FormGroup>
            <h1> I want to learn 
            <br /><br />
            <div className="col-md-6 offset-md-3">
              <Input type="language" name="language" id="language" placeholder="language" />
            </div>
            </h1>
            
          </FormGroup>
        </Form>

        <div className="Button">
          <Button color="primary">Already Learning</Button>{' '}
        </div>

      </div>
        
    );
  }
}