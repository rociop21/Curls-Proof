import React from "react";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Link} from "react-router-dom";

import "./Toolbar.css";


const Toolbar = () => {

	console.log(i18next.languages)
	const { t } = useTranslation("common");

	return (
		<Navbar className="toolbarmain" expand="lg">
			<Link to="/"><Navbar.Brand>Curls-Proof</Navbar.Brand></Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/bot"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.analyzer")}</Nav></Link>
					<Link to="/recipes"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.recipes")}</Nav></Link>
					<Link to="/faq"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.faq")}</Nav></Link>
					<Link to="/about"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.about")}</Nav></Link>
				</Nav>
				<Nav className="justify-content-end">
					<button className="LngButton" onClick={() => i18next.changeLanguage('en')}>En</button>
					<p className="LngButtonSeparation">/</p>
					<button className="LngButton" onClick={() => i18next.changeLanguage('es')}>Es</button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
	


export default Toolbar;