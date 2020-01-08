import React from "react";

import recipesData from "./../Recipes/RecipesData";
import RecipDescription from "./../Recipes/RecipDescription";


const SearchBar = (props) => {

	const toSearch = props.value;
	const recipesSearch = [];

	for (let key in recipesData) {
		recipesSearch.push({
			id: key,
			number: recipesData[key].number,
			title: recipesData[key].title,
			ingredients: recipesData[key].ingredients,
			instructions: recipesData[key].instructions,
			description: recipesData[key].description
		});
	}


	const result = recipesSearch.filter(e => {
		if (e.ingredients.join(" ").includes(toSearch)) {
			return true;
		}
		if (e.title.includes(toSearch)) {
			return true;
		}
		if (e.instructions.includes(toSearch)) {
			return true;
		}
		return false;
	});

	const resultDisplay = result.map(Element =>
		<RecipDescription 
			key={Element.id} 
			number={Element.number}
			title={Element.title}
			description={Element.description} />
	);


	return (
		<div>
			{resultDisplay.length>1 ? resultDisplay : <p className="SearchResultP">No results found.</p>}
		</div>
	);
};

export default SearchBar;