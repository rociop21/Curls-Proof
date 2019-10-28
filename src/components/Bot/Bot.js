import React, {Component} from 'react';
import UserInput from './UserInput';
import Button from 'react-bootstrap/Button';
import Analyzer from './Analyzer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Bot.css';

class Bot extends Component {

    state = {
        value: ' ',
        ingredients: null,
    };

    InputChangedHandler = (event) => {
        let updatedValue = this.state.value;
        updatedValue = event.target.value;
        this.setState({value: updatedValue})
    };

    SubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.value)
        let ingredients = this.state.value.trim().toLowerCase().split(", ");
        this.setState({ingredients: ingredients})
    };

    render() {

        return (
            <Container fluid={true}>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h3>Enter the ingredients of the product you want to test, separate ingredients with a comma and click 'Analyze!' to see if it contains any harm ingredient.</h3>
                        <p>Since typing the ingredients yourself may result in innacuracies, we recommend you find the list of ingredients on the brand's website and paste it here.</p>
                        <UserInput changed={this.InputChangedHandler} value={this.state.value}></UserInput>
                        <Button variant="primary" onClick={this.SubmitHandler} >Analyze!</Button>
                        {this.state.ingredients && <Analyzer ingredients={this.state.ingredients} />}
                    </Col>
                </Row>  
            </Container>
        );
    };

}

export default Bot;