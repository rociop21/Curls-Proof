import React, {Component} from 'react';
import './Recipes.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Recip from './Recip'
import recipesData from './RecipesData'
import SearchInput from './../SearchBar/SearchInput'
import SearchBar from './../SearchBar/SearchBar'

class recipesMain extends Component {
    
    state = {
        value: ' ',
        disabled: true,
        search: null,
    };

    InputChangedHandler = (event) => {
        let updatedValue = this.state.value;
        updatedValue = event.target.value;
        this.setState({value: updatedValue})
        this.setState({disabled: false})
    };

    SubmitHandler = (event) => {
        event.preventDefault();
        let search = this.state.value.trim().toLowerCase().split(", ");
        this.setState({search: search});
    };

    render () {
        const recipesElements = [];

        for (let key in recipesData) {
            recipesElements.push({
                id: key,
                number: recipesData[key].number,
                title: recipesData[key].title,
                description: recipesData[key].description,
        });
        };

        let recipesList = (
            recipesElements.map(Element =>
                <Recip 
                    key={Element.id} 
                    number={Element.number}
                    title={Element.title}
                    description={Element.description} />
            )
        );

        return (
            <Container fluid={true} className="RecipesContainer">
                <Row>
                    <SearchInput value={this.state.value} changed={this.InputChangedHandler} clicked={this.SubmitHandler} disabled={this.state.disabled} />
                    <Col md={{ span: 10, offset: 1 }}>
                        {this.state.search ? <SearchBar value={this.state.search} /> : recipesList}
                    </Col>
                </Row>  
            </Container>
        );
    };
};


export default recipesMain;