import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState( {
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable color="#8EC9FF">
                    <NavbarToggler right onClick={this.toggle}/>
                    <NavbarBrand href="/">L.E.X</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <LinkContainer to="/SignUp">
                                <NavItem>Learn</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem>Teach</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem>About</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}