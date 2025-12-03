import createElement from "../utils/createElement.js";

export default (props) => {
    const {
        label,
        placeholder,
        type,
        id
    } = props;
    const icon = type === "search" ? createElement(null, "img", "input-text__icon", {
        src: "img/icons/search.svg",
        alt: "search",
        width: "24",
        height: "24",
        loading: "lazy"
    }) : null;

    return (
        createElement([
            label ? createElement(label, "label", "input-text__label", {for: id}) : null,
            createElement([
                icon,
                createElement(null, "input", "input-text__control", {
                    type: type,
                    placeholder: placeholder,
                    id: id
                })
            ], "div", "input-text__wrapper"),
        ], "div", "input-text")
    )
}
