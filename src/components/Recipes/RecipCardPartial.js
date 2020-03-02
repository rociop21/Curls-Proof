import React from "react";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";

import "./Recipes.css";

import {BrowserRouter as Router, Link} from "react-router-dom";

const RecipDescription = (props) => {

	const { t } = useTranslation("common");

	return(
		<div>
			<br />
			<Card bg="light" style={{ width: "100%" }}>
				<Card.Header>{props.title}</Card.Header>
				<Card.Body>
					<Card.Text>
						{props.description}
						<br /><br />
						<Link to={`/recipes/${props.number}`}>{t("recipes.more")}</Link>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};


export default RecipDescription;