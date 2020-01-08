import React from "react";
import Form from "react-bootstrap/Form";


const UserInput = (props) => {

	return (
		<Form>
			<Form.Group>
				<Form.Label>{props.label}</Form.Label>
				<Form.Control as="textarea" rows="4" 
					value={props.value} 
					onChange={props.changed}/>
			</Form.Group>
		</Form>
	);
    
};

export default UserInput;