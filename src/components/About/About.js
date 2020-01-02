import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import PersonalImage from './../../assets/images/ImagenMia.jpeg';
import './About.css';


const About = (props) => (
    <Container fluid={true}>
        <Row>
            <Col className='AboutMe'>
                <h1 className='AboutTitle'>About me.</h1>
                <p>I'm a curly girl enthusiast who's been doing the Curly Girl Method for about 3 years. I live in Argentina and this method isn't 
                well-known and beauty company aren't used to making products using the CGM guidelines, so at first it was really hard for me to 
                find the right products to stablish my routine.I've been learning web development (with JavaScript and React) for 9 months or so, 
                and my idea of a sideproyect is something that has to be related to my interests, so it would give me a lot of joy to work on it, 
                but at the same time I wanted to produce something useful that could help people or make thinks easier somehow; that's how 
                I came with this website. Right now, it's still under construccion; but the mainly idea is to develop a website that can offer 
                most of the things you need to get started with this method and build your own routine based on your hair needs.</p>
                <p>You can contact me by emailing rocio.pantalone@gmail.com</p>
            </Col>
            <Col>
                <Image src={PersonalImage} height='300px' rounded className='AboutImage'/>  
            </Col>
        </Row>
    </Container>
)

export default About;