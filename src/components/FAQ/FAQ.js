import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./FAQ.css";


const About = () => {
	const { t } = useTranslation("common");

	return (
		<Container fluid={true}>
			<Row>
				<Col md={{ span: 8, offset: 2 }} className="FAQ">
					<h1 className="FAQTitle">{t("faq.title")}</h1>
					<h4>{t("faq.faq1")}</h4>
					<p>{t("faq.answer1")}</p>
					<h4>{t("faq.faq2")}</h4>
					<p>{t("faq.answer2")}</p>
				</Col>
			</Row>
		</Container>
	);
};


export default About;