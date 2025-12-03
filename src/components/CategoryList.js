import createElement from "../utils/createElement.js";
import {CATEGORIES} from "../utils/constants.js";

export default () => {
    return (
        createElement(CATEGORIES.map(category => (
            createElement([
                createElement(null, "input", "category__control", {
                    type: "checkbox",
                    name: "categories",
                    value: category,
                    id: category
                }),
                createElement(category, "label", "category__label", {for: category})
            ], "li", "category__item")
        )), "ul", "category")
    )
}