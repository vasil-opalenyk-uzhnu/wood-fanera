import createElement from "../utils/createElement.js";
import Logo from "../components/Logo.js";
import FooterNavigation from "../components/FooterNavigation.js";

export default () => {
    return (
        createElement(
            createElement([
                createElement([
                    createElement([
                        Logo({isSmall: false}),
                        createElement("Wood&Fanera — handcrafted wooden products made with care, sustainability, and timeless design.", "p", "footer__text")
                    ], "div", "footer__content"),
                    FooterNavigation()
                ], "div", "footer__top"),
                createElement([
                    createElement("@Vasil_Opalenyk", "p", "footer__bottom-text"),
                    createElement("Wood&Fanera", "p", "footer__bottom-text"),
                ], "div", "footer__bottom")
            ], "div", "footer__container container"),
            "footer",
            "footer"
        )
    )
}