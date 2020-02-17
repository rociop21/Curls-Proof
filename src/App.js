import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/HomePage/Home";
import Bot from "./components/Bot/Bot";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import recipesMain from "./components/Recipes/RecipesMain";
import IndividualRecipe from "./components/Recipes/IndividualRecipe";

function App() {
	return (
		<Router>
			<div>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/bot" component={Bot}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/faq" component={FAQ}/>
						<Route exact path="/recipes" component={recipesMain}/>
						<Route path="/recipes/:number" component={IndividualRecipe}/>	
						<Redirect to="/" />
					</Switch>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
