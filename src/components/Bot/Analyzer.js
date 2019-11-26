import React from 'react';
import {alcohols, sulfates, soaps, silicones, wax, witchHazel} from './../../ingredientsData/BadIngredients';

const Analyzer = (props) => {


    const toAnalyze = props.ingredients;

    let resultAlcohols = toAnalyze.filter(el => alcohols.includes(el));

    let resultSulfates = toAnalyze.filter(el => sulfates.includes(el));

    let resultSoaps = toAnalyze.filter(el => soaps.includes(el));

    let resultSilicones = toAnalyze.filter(el => silicones.includes(el));

    let resultWax = toAnalyze.filter(el => wax.includes(el));

    let resultWitchHazel = toAnalyze.filter(el => witchHazel.includes(el));

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

    if (props.ingredients && resultAlcohols.length==0 && resultSulfates.length==0 && resultSoaps.length==0 && resultSilicones.length==0 && resultWax.length==0 && resultWitchHazel.length==0) {
        resultText = <p>The analyzed product seems to be curly girl aproved.</p>
    };

    if (resultAlcohols.length>0) {
        let resultAlcoholsString = resultAlcohols.join(", ");
        resultAlcoholsText = <p>It contains the folowing alcohols in it's formula: {resultAlcoholsString}.</p>
    };

    if (resultSulfates.length>0) {
        let resultSulfatesString = resultSulfates.join(", ");
        resultSulfatesText = <p>It contains the folowing sulfates in it's formula: {resultSulfatesString}.</p>
    };

    if (resultSoaps.length>0) {
        let resultSoapsString = resultSoaps.join(", ");
        resultSoapsText = <p>It contains the folowing soaps in it's formula: {resultSoapsString}.</p>
    };

    if (resultSilicones.length>0) {
        let resultSiliconesString = resultSilicones.join(", ");
        resultSiliconesText = <p>It contains the folowing silicones in it's formula: {resultSiliconesString}.</p>
    };

    if (resultWax.length>0) {
        let resultWaxString = resultWax.join(", ", resultWax);
        resultWaxText = <p>It contains the folowing waxes in it's formula: {resultWaxString}.</p>
    };

    if (resultWitchHazel.length>0) {
        let resultWitchHazelString = resultWitchHazel.join(", ");
        resultWitchHazelText = <p>It contains the folowing ingredient in it's formula: {resultWitchHazelString}.</p>
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
