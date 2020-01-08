import React, {Component} from "react";


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

import UserInput from "./UserInput";
import Analyzer from "./Analyzer";

import "./Bot.css";

class Bot extends Component {

    state = {
        value: " ",
        ingredients: null,
        disabled: true,
    };

    InputChangedHandler = (event) => {
        let updatedValue = this.state.value;
        updatedValue = event.target.value;
        this.setState({value: updatedValue})
        this.setState({disabled: false})
    };

    SubmitHandler = (event) => {
        event.preventDefault();
        let ingredients = this.state.value.trim().toLowerCase().split(", ");
        this.setState({ingredients: ingredients})
    };

    render() {

        return (
            <Container fluid={true} className="Analyzer">
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="AnalyzerMain">
                        <h1>Curls-Proof Ingredients Analyzer</h1>
                        <h3>In <span>Curls-Proof</span> we aim to make it easier for you to decide on each product so you can concentrate on taking good care of your hair.</h3>
                        <Jumbotron className="AnalyzerInput">
                            <h4>Enter the ingredients of the product you want to test, separate ingredients with a comma and click "Analyze!" to see if it contains any harm ingredient.</h4>
                            <UserInput changed={this.InputChangedHandler} value={this.state.value} label={<p>Since typing the ingredients yourself may result in innacuracies, we recommend you find the list of ingredients on the brand"s website and paste it here.</p>}></UserInput>
                            <Button variant="primary" onClick={this.SubmitHandler} disabled={this.state.disabled}>Analyze!</Button>
                            {this.state.ingredients && <Analyzer ingredients={this.state.ingredients} />}
                        </Jumbotron>
                    </Col>
                </Row>  
            </Container>
        );
    };
}

export default Bot;