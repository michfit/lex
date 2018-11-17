import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import TeamMember from './TeamMember'
import maria from '../img/kiejnich.png'
import sean from '../img/langley.png'
import julian from '../img/rice.jpg'
import michelle from '../img/su.jpg'
import rishab from '../img/sukumar.png'
import justin from '../img/justin.png'
import jade from '../img/jade.png'
import don from '../img/don.jpg'
import felix from '../img/felix.jpg'
import placeholder from '../img/placeholder.png'

class Team extends Component {
    constructor() {
        super();
        this.state = {
            //List of team members
            people: [
                {
                    id:1,
                    photo:maria,
                    name:"Maria",
                    role:"Founder",
                    description:"3rd year"
                },
                {
                    id:2,
                    photo:sean,
                    name:"Sean",
                    role:"Cofounder",
                    description:"3rd year"
                },
                {
                    id:3,
                    photo:michelle,
                    name:"Michelle",
                    role:"Front End",
                    description:"3rd year"
                },
                {
                    id:4,
                    photo:julian,
                    name:"Julian",
                    role:"Front End",
                    description:"3rd year"
                },
                {
                    id:5,
                    photo:rishab,
                    name:"Rishab",
                    role:"Back End",
                    description:"2nd year"
                },
                {
                    id:6,
                    photo:jade,
                    name:"Jade",
                    role:"????",
                    description:"3rd year"
                },
                {
                    id:7,
                    photo:justin,
                    name:"Justin",
                    role:"????",
                    description:"3rd year"
                },
                {
                    id:8,
                    photo:placeholder, //help
                    name:"Maya",
                    role:"Back End",
                    description:"3rd year"
                },
                {
                    id:9,
                    photo:don,
                    name:"Don",
                    role:"Back End",
                    description:"2nd year?"
                },
                {
                    id:10,
                    photo:placeholder, //help
                    name:"Sarah",
                    role:"Back End?",
                    description:"1st year"
                },
                {
                    id:11,
                    photo:felix,
                    name:"Felix",
                    role:"Back End",
                    description:"1st year"
                },
                {
                    id:12,
                    photo:placeholder, //help
                    name:"Amanda",
                    role:"?? End",
                    description:"?? year"
                }
            ]
        }
    }
    render() {
        //Draw a column (card) for each team member
        let totalTeam = this.state.people.map(person => {
            return (
                <Col auto>
                    <TeamMember key={person.id} person={person} />
                </Col>
            )
        })
        return( 
            //Draw this whole thing on a row (I think)
            <Container fluid>
                <Row>
                    {totalTeam}
                </Row>
            </Container>
        );
    }
}

export default Team