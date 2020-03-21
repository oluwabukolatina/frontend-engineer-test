import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavView = () => {
    return (
        <Navbar bg="light" expand="lg" style={{  paddingBottom: '2%'
        }}>
            <Navbar.Brand href="#home" style={{    width: '80%'}}>FILM LOCATIONS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavView;