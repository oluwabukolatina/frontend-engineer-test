import React from 'react';
import { Form, FormControl, Navbar} from "react-bootstrap";

const NavView = ({search, onChange, searchForMovie}) => {
    return (
        <Navbar bg="light" expand="lg" style={{  paddingBottom: '2%', paddingTop: '2%'

        }}>
            <Navbar.Brand href="#home" style={{    width: '80%'}}>FILM LOCATIONS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <input type="text" name="search" value={search} onChange={onChange} onKeyDown={searchForMovie} placeholder="Search" className="mr-sm-2" />

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavView;