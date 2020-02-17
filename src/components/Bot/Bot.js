import React, {Component} from "react";
import { withTranslation } from 'react-i18next';

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
        const { t } = this.props;

        return (
            <Container fluid={true} className="Analyzer">
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="AnalyzerMain">
                        <h1>{t("bot.title")}</h1>
                        <h3>{t("bot.subtitle1")}<span>Curls-Proof</span> {t("bot.subtitle2")}</h3>
                        <Jumbotron className="AnalyzerInput">
                            <h4>{t("bot.instructions")}</h4>
                            <UserInput changed={this.InputChangedHandler} value={this.state.value} label={<p>{t("bot.advice")}</p>}></UserInput>
                            <Button variant="primary" onClick={this.SubmitHandler} disabled={this.state.disabled}>{t("bot.button")}</Button>
                            {this.state.ingredients && <Analyzer ingredients={this.state.ingredients} />}
                        </Jumbotron>
                    </Col>
                </Row>  
            </Container>
        );
    };
}

export default withTranslation('common')(Bot);