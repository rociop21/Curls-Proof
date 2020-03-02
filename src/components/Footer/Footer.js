import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import "./Footer.css";


const Footer = () => {
	const { t } = useTranslation("common");

	return (
        <div className="footer">
            <div className="copyright">
                <p>&copy; 2020 - Curls-Proof</p>
            </div>
            <div className="social">
                <a href="mailto:rocio.pantalone@gmail.com" className="support">{t("footer.contact")}</a>
            </div>
        </div>
	);
};

export default Footer;