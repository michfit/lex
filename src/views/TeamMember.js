import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle,
         CardSubtitle } from 'reactstrap'

class TeamMember extends Component {
	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            toolTipOpen: false
        };
    }

    toggle() {
        this.setState( {
            tooltipOpen: !this.state.tooltipOpen
        });
    }

	render() {
        let { id, photo, name, role, description } = this.props.person;
        return (
            <div>
                <Card fluid style={cardBackground}>
                    <CardImg top src={photo} style={imageStyle} alt="Caption" />
                    <CardBlock style={cardBlock}>
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

const cardBackground = {
    backgroundColor: "RGB(255, 255, 255, 0)",
    width: "202px",
    marginBottom: "40px"
}

const cardBlock = {
    backgroundColor: "white"
}

const imageStyle = {
    width: "200px",
    borderRadius: "0px"
}