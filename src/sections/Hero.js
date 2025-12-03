import createElement from "../utils/createElement.js";
import Button from "../components/Button.js";

export default () => {
    return (
        createElement(
            createElement([
                createElement("Wood&Fanera", "h1", "hero__title"),
                createElement("Wood&Fanera – Crafted by Nature, Perfected by Hand.", "p"),
                Button("Go to shop", {link: "shop.html#shop"})
            ], "div", "hero__container container"),
            "section",
            "hero",
            {id: "home"}
        )
    )
}