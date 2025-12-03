import createElement from "../utils/createElement.js";
import {LINKS} from "../utils/constants.js";

export default (props) => {
    const {
        title = "",
        isVertical = false,
    } = props;

    const nav = (
        createElement(
            createElement(
                LINKS.map(({text, href}) => (
                    createElement(
                        createElement(text, "a", "nav__link", {
                            href: href,
                        }),
                        "li",
                        "nav__item"
                    )
                )),
                "ul",
                "nav__list"
            ),
            "nav",
            `nav${isVertical ? " vertical" : ""}`,
        )
    );

    return (
        title
            ?
            createElement([
                createElement(title, "h4", "nav__title"),
                nav
            ], "div")
            : nav
    )
}