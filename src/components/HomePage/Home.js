import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


import landing from "./../../assets/images/ggg.svg";

import "./Home.css";


const Home = () => {
	const { t } = useTranslation("common");

	return (
		<Container fluid={true}  className={"HomePage"}>
			<Row  className={"HomeMain"}>
				<Col className={"HomeTitle"} md={{ span: 6, offset: 1 }}>
					<h1>
						{t("home.title1")} {<br />} <span> </span>{t("home.title2")}
					</h1>
					<h4>
						{t("home.intro")}
					</h4>
				</Col>
				<Col md={{ span: 5, offset: 0 }}>
					<img src={landing} alt="Beauty Products" className="HomeMainImg"/>
				</Col>
			</Row> 
			<Row className={"HomeAnalyze"}>
				<Col lg={true} >
					<Card bg="light" style={{ width: "100%" }} className={"HomeAnalyze"}>
						<Card.Body>
							<Card.Title>{t("home.analyzertitle")}</Card.Title>
							<Card.Text>{t("home.analyzertext")}</Card.Text>
							<Link to="/bot"><Button variant="primary">{t("home.learnbutton")}</Button></Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={true} >
					<Card bg="light" style={{ width: "100%" }} className={"HomeRecipes"} > 
						<Card.Body>
							<Card.Title>{t("home.recipestitle")}</Card.Title>
							<Card.Text>
								{t("home.recipestext")}
								<br/>
								<br/>
							</Card.Text>
							<Link to="/recipes"><Button variant="primary">{t("home.learnbutton")}</Button></Link>
						</Card.Body>
					</Card>
				</Col>
			</Row> 
		</Container>
	);
};


export default Home;