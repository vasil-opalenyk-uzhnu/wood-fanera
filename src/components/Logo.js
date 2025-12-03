import createElement from "../utils/createElement.js";

export default (props) => {
    const {
        isSmall = false
    } = props;

    return (
        createElement(null, "a", `logo ${isSmall && "logo--small"}`, {
            href: "index.html"
        })
    )
}