import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Toolbar.css';


const Toolbar = (props) => (
    <Navbar className='toolbarmain' expand="lg">
    <Navbar.Brand>Curls-Proof</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/"><Nav className={'NavLink hvr-overline-from-left'} >Home</Nav></Link>
            <Link to="/bot"><Nav className={'NavLink hvr-overline-from-left'}>Bot</Nav></Link>
            <Link to="/recipes"><Nav className={'NavLink hvr-overline-from-left'}>Recipes</Nav></Link>
            <Link to="/faq"><Nav className={'NavLink hvr-overline-from-left'}>FAQ</Nav></Link>
            <Link to="/about"><Nav className={'NavLink hvr-overline-from-left'}>About</Nav></Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)


export default Toolbar;