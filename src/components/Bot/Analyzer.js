import React from 'react';
import {alcohols, sulfates, soaps, silicones, wax, witchHazel} from './../../ingredientsData/BadIngredients';

const Analyzer = (props) => {


    const toAnalyze = props.ingredients;

    let resultAlcohols = toAnalyze.filter(el => alcohols.includes(el));
    console.log(resultAlcohols);

    let resultSulfates = toAnalyze.filter(el => sulfates.includes(el));
    console.log(resultSulfates);

    let resultSoaps = toAnalyze.filter(el => soaps.includes(el));
    console.log(resultSoaps);

    let resultSilicones = toAnalyze.filter(el => silicones.includes(el));
    console.log(resultSilicones);

    let resultWax = toAnalyze.filter(el => wax.includes(el));
    console.log(resultWax);

    let resultWitchHazel = toAnalyze.filter(el => witchHazel.includes(el));
    console.log(resultWitchHazel);

    let resultText = null;
    let resultAlcoholsText = null;
    let resultSulfatesText = null;
    let resultSoapsText = null;
    let resultSiliconesText = null;
    let resultWaxText = null;
    let resultWitchHazelText = null;

    if (resultAlcohols.length>0 || resultSulfates.length>0 || resultSoaps.length>0 || resultSilicones.length>0 ||resultWax.length>0 || resultWitchHazel.length>0) {
        resultText = <p>The analyzed product is not curly girl aproved:</p>
    };

    if (resultAlcohols.length>0) {
        let resultAlcoholsString = resultAlcohols.join(", ");
        resultAlcoholsText = <p>it contains the folowing alcohols in it's formula: {resultAlcoholsString}.</p>
    };

    if (resultSulfates.length>0) {
        let resultSulfatesString = resultSulfates.join(", ");
        resultSulfatesText = <p>it contains the folowing sulfates in it's formula: {resultSulfatesString}.</p>
    };

    if (resultSoaps.length>0) {
        let resultSoapsString = resultSoaps.join(", ");
        resultSoapsText = <p>it contains the folowing soaps in it's formula: {resultSoapsString}.</p>
    };

    if (resultSilicones.length>0) {
        let resultSiliconesString = resultSilicones.join(", ");
        resultSiliconesText = <p>it contains the folowing silicones in it's formula: {resultSiliconesString}.</p>
    };

    if (resultWax.length>0) {
        let resultWaxString = resultWax.join(", ", resultWax);
        resultWaxText = <p>it contains the folowing waxes in it's formula: {resultWaxString}.</p>
    };

    if (resultWitchHazel.length>0) {
        let resultWitchHazelString = resultWitchHazel.join(", ");
        resultWitchHazelText = <p>it contains the folowing ingredient in it's formula: {resultWitchHazelString}.</p>
    };

    return (
        <div>
            {resultText}
            {resultAlcoholsText}
            {resultSulfatesText}
            {resultSoapsText}
            {resultSiliconesText}
            {resultWaxText}
            {resultWitchHazelText}
        </div>
        
    );
}

export default Analyzer;
