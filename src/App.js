import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './components/HomePage/Home'
import Bot from './components/Bot/Bot';
import recipesMain from './components/Recipes/RecipesMain';
import Recipes from './components/Recipes/Recipes'

function App() {
	return (
    	<Router>
			<div>
				<Layout>
					<Switch>
        				<Route exact path="/" component={Home}/>
						<Route path="/bot" component={Bot}/>
						<Route exact path="/recipes" component={recipesMain}/>
						<Route path="/recipes/:number" component={Recipes}/>	
        				<Redirect to="/" />
      				</Switch>
				</Layout>
			</div>
    	</Router>
	);
}

export default App;
