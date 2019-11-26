import React from 'react';
import './Recipes.css';
import Card from 'react-bootstrap/Card'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

const RecipComplete = (props) => {
    return(
        <div>
            <br />
            <Card bg="light" style={{ width: '100%' }}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.ingredients.map( ingredient =>
                    <li>{ingredient}</li>)}</Card.Title>
                    <Card.Text>
                        {props.instructions}
                    </Card.Text>
                    <div class="fb-share-button" data-href="https://www.youtube.com/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Frecipes&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                    <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-url="https://www.youtube.com/" data-hashtags="#Curls-Proof" data-lang="en" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </Card.Body>
            </Card>
        </div>
    );
};


export default RecipComplete;