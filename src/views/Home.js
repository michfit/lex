import React, { Component } from 'react';
import { Form, FormGroup, Media, Label, Input, FormText, Jumbotron, Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Collapse} from 'reactstrap';
import maria from '../img/kiejnich.png'
import sean from '../img/langley.png'
import julian from '../img/rice.jpg'
import michelle from '../img/su.jpg'
import rishab from '../img/sukumar.png'
import justin from '../img/justin.png'
import jade from '../img/jade.png'

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

        <Container style={team} fluid>
          <div>
              <Container fluid style={{ padding: "40px" }}>
                <h1>Meet the Team</h1>
              </Container>
              <Container>
                <CardGroup>
                  <Card>
                    <CardImg top width="100px" src={maria} style={imageStyle} />
                    <CardBody style={subText}>
                      <CardTitle>Maria</CardTitle>
                      <CardSubtitle>Founder</CardSubtitle>
                      <CardText>Maria is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src={sean} style={imageStyle}/>
                    <CardBody style={subText}>
                      <CardTitle>Sean</CardTitle>
                      <CardSubtitle>Co-Founder</CardSubtitle>
                      <CardText>Sean is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src={michelle} style={imageStyle}/>
                    <CardBody style={subText}>
                      <CardTitle>Michelle</CardTitle>
                      <CardSubtitle>Front End Developer</CardSubtitle>
                      <CardText>Michelle is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src={rishab} style={imageStyle}/>
                    <CardBody style={subText}>
                      <CardTitle>Rishab</CardTitle>
                      <CardSubtitle>Back End Developer</CardSubtitle>
                      <CardText>Rishab is a second year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src={jade} style={imageStyle}/>
                    <CardBody style={subText}>
                      <CardTitle>Jade</CardTitle>
                      <CardSubtitle>?? Developer</CardSubtitle>
                      <CardText>Jade is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src={julian} style={imageStyle}/>
                    <CardBody style={subText}>
                      <CardTitle>Julian</CardTitle>
                      <CardSubtitle>Front End Developer</CardSubtitle>
                      <CardText>Julian is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>
                </CardGroup> 

                <CardGroup>
                  <Card>
                    <CardImg top width="100%" src=""/>
                    <CardBody>
                      <CardTitle>Don</CardTitle>
                      <CardSubtitle>Back End Developer</CardSubtitle>
                      <CardText>Don is a second year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src=""/>
                    <CardBody>
                      <CardTitle>Sarah</CardTitle>
                      <CardSubtitle>Back End Developer</CardSubtitle>
                      <CardText>Sarah is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src=""/>
                    <CardBody>
                      <CardTitle>Amanda</CardTitle>
                      <CardSubtitle>?? Developer</CardSubtitle>
                      <CardText>Amanda is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src=""/>
                    <CardBody>
                      <CardTitle>Felix</CardTitle>
                      <CardSubtitle>Back End Developer</CardSubtitle>
                      <CardText>Fleix is a first year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card>  
                  <Card>
                    <CardImg top width="100%" src=""/>
                    <CardBody>
                      <CardTitle>Maya</CardTitle>
                      <CardSubtitle>Back End Developer</CardSubtitle>
                      <CardText>Maya is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card> 
                  <Card>
                    <CardImg top width="100%" src={justin} style={imageStyle}/>
                    <CardBody>
                      <CardTitle>Justin</CardTitle>
                      <CardSubtitle>Project Manager</CardSubtitle>
                      <CardText>Justin is a third year at UCLA.</CardText>
                      <Button>Website</Button>
                    </CardBody>
                  </Card> 
                </CardGroup>   
              </Container>
          </div>
        </Container>
      </div>
        
    );
  }
}

const imageStyle = {
  //maxWidth: 200,
  //maxHeight: 200,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  //borderRadius: "100%"
}

const subText = {
  fontSize: "18px"
}

const toLearn = {
  backgroundColor: "FFFFFF"
}

const team = {
  backgroundColor: "#EEEEEE"
}

