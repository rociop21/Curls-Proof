import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './components/HomePage/Home'
import Bot from './components/Bot/Bot';

function App() {
	return (
    	<Router>
			<div>
				<Layout>
					<Switch>
        				<Route exact path="/" component={Home}/>
						<Route path="/bot" component={Bot}/>	
        				<Redirect to="/" />
      				</Switch>
				</Layout>
			</div>
    	</Router>
	);
}

export default App;
