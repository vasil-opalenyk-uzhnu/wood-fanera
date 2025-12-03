import createElement from "../utils/createElement.js";

export default (children, props) => {
    const {
        title,
        containerClass = "container",
        isLast,
        id
    } = props;
    const attributes = {};

    if(id) attributes.id = id;

    if(!Array.isArray(children)) children = [children];

    return (
        createElement(
            createElement([
                title && createElement(title, "h2", "section__title"),
                ...children
            ], "div", containerClass),
            "section",
            `section${isLast ? " section--last" : ""}`,
            attributes
        )
    )
}