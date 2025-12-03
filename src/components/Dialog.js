import createElement from "../utils/createElement.js";

export default (props) => {
    const {
        children,
        isOpen = false,
    } = props;

    return (
        createElement(children, "div", `dialog${isOpen ? " dialog--open" : ""}`)
    )
}