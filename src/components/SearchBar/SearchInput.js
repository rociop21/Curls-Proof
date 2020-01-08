import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./SearchBar.css";


const SearchInput = (props) => {

	return (
		<Form inline className="SearchForm">
			<FormControl 
				type="text" 
				placeholder="Search" 
				className="mr-sm-2" 
				value={props.value} 
				onChange={props.changed} />
			<Button 
				variant="outline-success" 
				onClick={props.clicked} 
				disabled={props.disabled} >Search</Button>
		</Form>
	);
};

export default SearchInput;
