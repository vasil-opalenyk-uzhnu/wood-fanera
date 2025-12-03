import createElement from "../utils/createElement.js";

export default (props) => {
    const {
        title,
        children
    } = props;

    return (
        createElement([
            createElement(null, "div", "form-control__line"),
            createElement(title, "h4"),
            children
        ], "div", "form-control")
    )
}