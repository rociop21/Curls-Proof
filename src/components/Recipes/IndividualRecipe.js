import React from "react";
import { useParams} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import RecipComplete from "./RecipeCardComplete";
import recipesData from "./RecipesDataEN";

import "./Recipes.css";

const Recipes = () => {

	let { number } = useParams();
  
	const recipesElements = [];

	for (let key in recipesData) {
		recipesElements.push({
			id: key,
			number: recipesData[key].number,
			title: recipesData[key].title,
			ingredients: recipesData[key].ingredients,
			instructions: recipesData[key].instructions,
		});
	}

	// Filter for rendering individual recipes.

	let recipesFiltered = recipesElements.filter(recipesElements => recipesElements.number === number);

	let recipesList = (
		recipesFiltered.map(Element =>
			<RecipComplete
				key={Element.id} 
				number={Element.number}
				title={Element.title}
				ingredients={Element.ingredients}
				instructions={Element.instructions} />
		)
	);

	return (
		<Container fluid={true}>
			<Row>
				<Col md={{ span: 10, offset: 1 }}>
					{recipesList}
				</Col>
			</Row>  
		</Container>
	);
};


export default Recipes;