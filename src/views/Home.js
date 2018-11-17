import React, { Component } from 'react';
import { Form, FormGroup, Media, Label, Input, FormText, Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import Navigation from './Navbar'
import Team from './Team'
import AboutUs from './About'

export default class Home extends Component {
	state={

  }
	render() {
    return (
      <div>
        <Container fluid style={top}>
          <Navigation />
        </Container>
        
        <Container fluid>
          <Container fluid style={titleText}>
            <h1 className="display-3">L . E . X</h1>
            <p className="lead">Learn what you want, where you want.</p> 
          </Container>
        </Container>

          <Container fluid style={toLearn} >
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
                <Button color="dark">Already Learning</Button>{' '}
              </div>
            </Container>
          </Container>
          
          
          <Container fluid style={aboutUs}>
            <AboutUs />
          </Container>
        
      </div>
        
    );
  }
}

const top = {
  backgroundColor: "#8EC9FF",
  fontFamily: 'PT Sans, sans-serif'
}

const titleText = {
  //backgroundColor: "#74BBFD"
  paddingTop: "75px",
  paddingBottom: "75px",
  fontFamily: 'PT Sans, sans-serif'
}

const toLearn = {
  backgroundColor: "#7CADF1",
  paddingTop: "75px", //Temporary numbers
  paddingBottom: "75px",
  color: "#EDFEFD",
  fontFamily: 'PT Sans, sans-serif'
}

const meetTeam = {
  backgroundColor: "#618DD8",
  paddingTop: "75px",
  paddingBottom: "75px",
  color: "#FFFFFF",
  fontFamily: 'PT Sans, sans-serif'
}

const teamDetails = {
  marginTop: "10px",
  color: "#000000",
  fontFamily: 'PT Sans, sans-serif'
}

const aboutUs = {
  paddingTop: "75px",
  paddingBottom: "75px",
  backgroundColor: "#5074B0",
  color: "#EEEEEE"
}