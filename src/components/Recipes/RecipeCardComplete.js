import React from "react";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";

import "./Recipes.css";

const RecipComplete = (props) => {

	const { t } = useTranslation("common");

	return(
		<div>
			<br />
			<Card bg="light" style={{ width: "100%" }}>
				<Card.Header>{props.title}</Card.Header>
				<Card.Body>
					<Card.Title>{t("recipes.ingredients")}</Card.Title>
					<Card.Text>
						{props.ingredients.map( ingredient =>
						<li key={ingredient} >{ingredient}</li>)}
						<br />
						{props.instructions}
					</Card.Text>
					<div className="fb-share-button" data-href="https://curls-proof.netlify.com/recipes/1" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcurls-proof.netlify.com%2Frecipes%2F1&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">{t("recipes.share")}</a></div>
					<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Hi there! I want to share this hair mask recipe:" data-url="https://curls-proof.netlify.com/recipes/1" data-hashtags="curls-proof" data-show-count="false">{t("recipes.tweet")}</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</Card.Body>
			</Card>
		</div>
	);
};


export default RecipComplete;