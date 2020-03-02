import React from "react";
import { useTranslation } from "react-i18next";

import Alert from "react-bootstrap/Alert";

import {alcohols, sulfates, soaps, silicones, wax, witchHazel} from "./../../ingredientsData/BadIngredients";

const Analyzer = (props) => {
	const { t } = useTranslation("common");

	const toAnalyze = props.ingredients;

	let resultAlcohols = toAnalyze.filter(el => alcohols.includes(el));
	let resultSulfates = toAnalyze.filter(el => sulfates.includes(el));
	let resultSoaps = toAnalyze.filter(el => soaps.includes(el));
	let resultSilicones = toAnalyze.filter(el => silicones.includes(el));
	let resultWax = toAnalyze.filter(el => wax.includes(el));
	let resultWitchHazel = toAnalyze.filter(el => witchHazel.includes(el));

	let alertVariant = "success";
	let resultText = null;
	let resultAlcoholsText = null;
	let resultSulfatesText = null;
	let resultSoapsText = null;
	let resultSiliconesText = null;
	let resultWaxText = null;
	let resultWitchHazelText = null;
	let adviceText = null;

	if (resultAlcohols.length>0 || resultSulfates.length>0 || resultSoaps.length>0 || resultSilicones.length>0 ||resultWax.length>0 || resultWitchHazel.length>0) {
		resultText = <Alert.Heading>{t("analyzer.notaproved")}</Alert.Heading>;
		alertVariant = "danger";
	}

	if (props.ingredients && resultAlcohols.length==0 && resultSulfates.length==0 && resultSoaps.length==0 && resultSilicones.length==0 && resultWax.length==0 && resultWitchHazel.length==0) {
		resultText = <Alert.Heading>{t("analyzer.aproved")}</Alert.Heading>;
		adviceText = <p>{t("analyzer.aprovedalert")}</p>;
		alertVariant = "success";
	}

	if (resultAlcohols.length>0) {
		let resultAlcoholsString = resultAlcohols.join(", ");
		resultAlcoholsText = <p>{t("analyzer.alcoholsalert")}{resultAlcoholsString}.</p>;
	}

	if (resultSulfates.length>0) {
		let resultSulfatesString = resultSulfates.join(", ");
		resultSulfatesText = <p>{t("analyzer.sulfatesalert")}{resultSulfatesString}.</p>;
	}

	if (resultSoaps.length>0) {
		let resultSoapsString = resultSoaps.join(", ");
		resultSoapsText = <p>{t("analyzer.soapsalert")}{resultSoapsString}.</p>;
	}

	if (resultSilicones.length>0) {
		let resultSiliconesString = resultSilicones.join(", ");
		resultSiliconesText = <p>{t("analyzer.siliconesalert")}{resultSiliconesString}.</p>;
	}

	if (resultWax.length>0) {
		let resultWaxString = resultWax.join(", ", resultWax);
		resultWaxText = <p>{t("analyzer.waxesalert")}{resultWaxString}.</p>;
	}

	if (resultWitchHazel.length>0) {
		let resultWitchHazelString = resultWitchHazel.join(", ");
		resultWitchHazelText = <p>{t("analyzer.WitchHazelalert")}{resultWitchHazelString}.</p>;
	}

	return (
		<Alert className="BotResultAlert" variant={alertVariant}>
			{resultText}
			<hr />
			{adviceText}
			{resultAlcoholsText}
			{resultSulfatesText}
			{resultSoapsText}
			{resultSiliconesText}
			{resultWaxText}
			{resultWitchHazelText}
		</Alert>
        
	);
};

export default Analyzer;
