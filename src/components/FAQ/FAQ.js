import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./FAQ.css";


const About = () => (
	<Container fluid={true}>
		<Row>
			<Col md={{ span: 8, offset: 2 }} className="FAQ">
				<h1 className="FAQTitle">Frequently asked questions</h1>
				<h4>How does the analyzer work?</h4>
				<p>First, it needs a list of ingredients to analyze, wich you can send him here. Then, it compares the list you provided with the list of harmful 
                ingredients in its data base and finds the coincidenses. Then returns to you the list of ingredients you should be careful about of that given 
                product.</p>
				<h4>Can it give me wrong results?</h4>
				<p>Yes, it can if ingredients are misspelled or if the list in its data base is not fully updated. Thats why we recommend you copy the list of 
                ingredients from manufacturer&apos;s or a store website. And, if you think that the bot is giving you a wrong result, you can contact me with the 
                list of ingredients and I will fix it.</p>
			</Col>
		</Row>
	</Container>
);

export default About;