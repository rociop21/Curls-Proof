import React from "react";
import { useTranslation } from "react-i18next";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Link} from "react-router-dom";

import "./Toolbar.css";


const Toolbar = () => {
	const { t } = useTranslation("common");

	return (
		<Navbar className="toolbarmain" expand="lg">
			<Navbar.Brand>Curls-Proof</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.home")}</Nav></Link>
					<Link to="/bot"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.analyzer")}</Nav></Link>
					<Link to="/recipes"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.recipes")}</Nav></Link>
					<Link to="/faq"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.faq")}</Nav></Link>
					<Link to="/about"><Nav className={"NavLink hvr-overline-from-left"}>{t("toolbar.about")}</Nav></Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
	


export default Toolbar;