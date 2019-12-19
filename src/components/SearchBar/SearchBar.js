import React from 'react';
import recipesData from './../Recipes/RecipesData';
import Recip from './../Recipes/Recip';


const SearchBar = (props) => {

    const toSearch = props.value;
    let recipesSearch = [];

    for (let key in recipesData) {
        recipesSearch.push({
            id: key,
            number: recipesData[key].number,
            title: recipesData[key].title,
            ingredients: recipesData[key].ingredients,
            instructions: recipesData[key].instructions,
            description: recipesData[key].description
        });
    };

    console.log(recipesSearch)

    let result = recipesSearch.filter(e => {
        if (e.ingredients.join(' ').includes(toSearch)) {
            return true
        }
        if (e.title.includes(toSearch)) {
            return true
        }
        if (e.instructions.includes(toSearch)) {
            return true
        }
        return false
    });

    let resultDisplay = result.map(Element =>
        <Recip 
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
}

export default SearchBar;