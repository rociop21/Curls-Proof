import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import beautyProducts from './../../assets/images/beauty-products.png';
import laying from './../../assets/images/laying.png';
import landing from './../../assets/images/ggg.svg'
import './Home.css';


const Home = (props) => (
    <Container fluid={true}  className={'HomePage'}>
        <Row  className={'HomeMain'}>
            <Col md='auto' className={'HomeTitle'}>
                <h1>
                    Perfect hair {<br />} <span> </span>made easy
                </h1>
                <h4>
                    Taking good care of you hair have never been easier.
                </h4>
            </Col>
            <Col md='auto'>
                <img src={landing} alt='Beauty Products'/>
            </Col>
        </Row> 
        <Row className={'HomeAnalyze'}>
            <Col lg={true} >
                <Card bg="light" style={{ width: '100%' }} className={'HomeAnalyze'}>
                <Card.Body>
                    <Card.Title>Analyze your ingredients</Card.Title>
                    <Card.Text>
                        A growing number of people, regardless of their pattern, are interested in taking care of their hair; 
                        but this can be a complicated task due to the amount of information available from different sources with 
                        small variations in their statements.
                        Our goal is to help you determine if a products contains any harmful ingredients by comparing them to our data base.
                    </Card.Text>
                    <Link to="/bot"><Button variant="primary">Learn more</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={true} >
                <Card bg="light" style={{ width: '100%' }} className={'HomeRecipes'} > 
                    <Card.Body>
                        <Card.Title>Handle all you recipies in one place</Card.Title>
                        <Card.Text>
                            Weather you don't want to spend too much buying products for your hair or just prefer using more natural ingredients, 
                            we can help you to achive that by giving you a place to handle all your recipes and search for new ones.
                            <br/>
                            <br/>
                        </Card.Text>
                        <Link to="/recipes"><Button variant="primary">Learn more</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    </Container>
    
)

export default Home;