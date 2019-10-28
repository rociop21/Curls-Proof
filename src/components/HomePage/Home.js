import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';


const Home = (props) => (
    <Container fluid={true}  className={'HomeTitle'}>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <h5>
                    A growing number of people, regardless of their pattern, are interested in taking care of their hair; 
                    but this can be a complicated task due to the amount of information available from different sources with small variations in their statements.
                </h5>
                <h5>
                    Whether you're looking to take care of your hair by rigorously following the curly girl's method, 
                    or you are looking to reduce the consumption of harmful products without following the method to the letter, 
                    or just avoiding certain products, it is important that you know the ingredients of each of them to be able to decide correctly.
                </h5>
                <h5>
                    In <span>Curls-Proof</span> we aim to make it easier for you to decide on each product so you can concentrate on taking good care of your hair.
                </h5>
            </Col>
        </Row>  
    </Container>
    
)

export default Home;