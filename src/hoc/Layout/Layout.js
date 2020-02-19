import React from "react";

import Toolbar from "./../../components/Navigation/Toolbar";
import Footer from "./../../components/Footer/Footer"

import "./Layout.css";

const Layout = (props) => (
	<div id="wrap">
		<Toolbar />
		<main className="Content">
			{props.children}
		</main>
		<Footer />
	</div>
);

export default Layout;