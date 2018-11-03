import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class studentTeacher extends Component {
	state = {
	}

	render(){
		return(
			<Form>
				<FormGroup row>
					<Label for="studentTeacher" sm={2}>I am a</Label>
						<Col sm={2}>
							<Input type="select" name="select" id="studentTeacher">
								<option>Student</option>
								<option>Teacher</option>
							</Input>
						</Col>
				</FormGroup>
					
					<FormGroup row>
						<Label for="lookingFor" sm={2}>looking for a </Label>
							<Col sm={2}>
								<Input type="select" name="select" id="lookingFor">
									<option>Teacher</option>
									<option>Student</option>
									<option>Study Buddy</option>
								</Input>
							</Col>
					</FormGroup>
				
			</Form>
		);
	}
}