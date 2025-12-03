import createElement from "../utils/createElement.js";
import Section from "../layouts/Section.js";
import {CONTACTS} from "../utils/constants.js";

export default () => {
    const content = (
        createElement([
            createElement(
                createElement(null, "img", null, {
                    src: "img/contacts.png" ,
                    alt: "contact",
                    width: "400",
                    height: "500",
                    loading: "lazy"
                }),
                "div",
                "contacts__image"
            ),
            createElement(
                CONTACTS.map(({img, text}) => (
                    createElement(
                        createElement([
                            createElement(
                                createElement(null, "img", null, {
                                    src: img ,
                                    alt: "contact",
                                    width: "24",
                                    height: "24",
                                    loading: "lazy"
                                }),
                                "div",
                                "contacts__item-image"
                            ),
                            createElement(text, "p", "contacts__item-text")
                        ], "li", "contacts__item"),
                    )
                )),
                "ul",
                "contacts__list"
            )
        ], "div", "contacts")
    )

    return (
        Section(content, {
            title: "Contacts",
            containerClass: "container-small",
            isLast: true,
            id: "contacts"
        })
    )
}
