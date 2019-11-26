import React from 'react';
import './Recipes.css';
import Card from 'react-bootstrap/Card'

import {BrowserRouter as Router, Link} from "react-router-dom";

const Recip = (props) => {
    return(
        <div>
            <br />
            <Card bg="light" style={{ width: '100%' }}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                    <Card.Text>
                        {props.description}
                        <br />
                        <Link to={`/recipes/${props.number}`}>Read more...</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Recip;