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
                <a href="#" class="support">{t("footer.contact")}</a>
                <a href="#" class="face">f</a>
                <a href="#" class="linked">in</a>
                <a href="#" class="tweet">t</a>
            </div>
        </div>
	);
};

export default Footer;