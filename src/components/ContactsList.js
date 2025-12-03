import createElement from "../utils/createElement.js";
import {CONTACTS} from "../utils/constants.js";

export default () => {
    return (
        createElement([
            createElement("Contacts", "h4"),
            createElement(CONTACTS.map(({link, img}) => (
                createElement(
                    createElement(
                        createElement(null, "img", null, {
                            src: img,
                            alt: "img",
                            width: "24",
                            height: "24",
                            loading: "lazy"
                        }),
                        "a",
                        "contacts-list__link",
                        {href: link}
                    ),
                    "li",
                    "contacts-list__item"
                )
            )), "ul", "contacts-list__list")
        ], "div", "contacts-list")
    )
}