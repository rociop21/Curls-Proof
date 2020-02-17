import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import PersonalImage from "./../../assets/images/ImagenMia.jpeg";

import "./About.css";


const About = () => {
	const { t } = useTranslation("common");

	return (
		<Container fluid={true}>
			<Row>
				<Col className="AboutMe">
					<h1 className="AboutTitle">{t("about.title")}</h1>
					<p>{t("about.description")}</p>
					<p>{t("about.contact")}</p>
				</Col>
				<Col>
					<Image src={PersonalImage} height="300px" rounded className="AboutImage"/>  
				</Col>
			</Row>
		</Container>
	);
};

export default About;