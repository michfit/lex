import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle,
         CardSubtitle } from 'reactstrap'

class TeamMember extends Component {
	constructor(props) {
        super(props);
    }
	render() {
        let { id, photo, name, role, description } = this.props.person;
        return (
            <div>
                <Card fluid style={{width: "200px"}}>
                    <CardImg top width="100%" src={photo} style={{width: "200px"}}alt="Caption"/>
                    <CardBlock>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{role}</CardSubtitle>
                        <CardText>{description}</CardText>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default TeamMember;