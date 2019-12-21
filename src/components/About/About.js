import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PersonalImage from './../../assets/images/ImagenMia.jpeg'
import './About.css';


const About = (props) => (
    <Container fluid={true}>
        <h1 className='AboutTitle'>About Curls-Proof</h1>
            <Card bg="light" style={{ width: '90%' }} className='AboutCard' >
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col className='AboutMe'>
                                <h2>About its developer.</h2>
                                <Image src={PersonalImage} height='300px' rounded className='AboutImage'/>
                                <p>I'm a curly girl enthusiast who's been doing the Curly Girl Method for about 3 years. I live in Argentina and this method isn't 
                                well-known and beauty company aren't used to making products using the CGM guidelines, so at first it was really hard for me to 
                                find the right products to stablish my routine.I've been learning web development (with JavaScript and React) for 9 months or so, 
                                and my idea of a sideproyect is something that has to be related to my interests, so it would give me a lot of joy to work on it, 
                                but at the same time I wanted to produce something useful that could help people or make thinks easier somehow; that's how 
                                I came with this website. Right now, it's still under construccion; but the mainly idea is to develop a website that can offer 
                                most of the things you need to get started with this method and build your own routine based on your hair needs.</p>
                                <p>You can contact me by emailing rocio.pantalone@gmail.com</p>
                            </Col>
                            <Col className='FAQ'>
                                <h2>Frequently asked questions.</h2>
                                <h4>How does the analyzer work?</h4>
                                <p>First, it needs a list of ingredients to analyze, wich you can send him here. Then, it compares the list you provided with the list of harmful 
                                ingredients in its data base and finds the coincidenses. Then returns to you the list of ingredients you should be careful about of that given 
                                product.</p>
                                <h4>Can it give me wrong results?</h4>
                                <p>Yes, it can if ingredients are misspelled or if the list in its data base is not fully updated. Thats why we recommend you copy the list of 
                                ingredients from manufacturer's or a store website. And, if you think that the bot is giving you a wrong result, you can contact me with the 
                                list of ingredients and I will fix it.</p>
                            </Col>
                        </Row> 
                    </Card.Text>
                    </Card.Body>
                </Card>
                
    </Container>
)

export default About;