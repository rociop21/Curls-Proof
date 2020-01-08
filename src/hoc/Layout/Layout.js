import React from "react";

import Toolbar from "./../../components/Navigation/Toolbar";

import "./Layout.css";

const Layout = (props) => (
	<div>
		<Toolbar />
		<main className="Content">
			{props.children}
		</main>
	</div>
);

export default Layout;