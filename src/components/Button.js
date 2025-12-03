import createElement from "../utils/createElement.js";

export default (children, props) => {
    const {
        type,
        link,
        isTransparent,
    } = props;

    return (
        createElement(
            link
                ? createElement(children, "a", "button__link", {href: link})
                : children,
            "button",
            `button${isTransparent ? " button--transparent" : ""}`,
            {
                type: type
            },
        )
    )
}