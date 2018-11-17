import React, { Component } from 'react';
import { Form, FormGroup, Media, Label, Input, FormText, Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import Team from './Team'

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

        <Container style={toLearn} fluid>
          <Form>
            <FormGroup>
              <h1> I want to learn 
              <br /><br />
              <div className="col-md-6 offset-md-3">
                <Input className="justify-content-center" type="language" name="language" id="language" placeholder="language" />
              </div>
              </h1>
              
            </FormGroup>
          </Form>
          <Container fluid style={{ paddingBottom: "40px" }}>
            <div className="Button">
              <Button color="primary">Already Learning</Button>{' '}
            </div>
          </Container>
          
        </Container>
        <Container fluid style={meetTeam}>
          <h1>Meet the Team</h1>
          <Team />
        </Container>
      </div>
        
    );
  }
}

const toLearn = {
  backgroundColor: "FFFFFF"
}

const meetTeam = {
  backgroundColor: "#EEEEEE",
  paddingTop: "40px"
}