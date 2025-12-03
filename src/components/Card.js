import createElement from "../utils/createElement.js";
import Button from "./Button.js";
import Rating from "./Rating.js";

export default (props) => {
    const {
        img,
        rating,
        type,
        title,
        description,
        cost,
        isShopCard = true
    } = props;

    return (
        createElement([
            createElement(
                createElement(null, "img", null, {
                    src: img,
                    alt: `Image of ${title}`,
                    width: "360",
                    height: "232",
                    loading: "lazy"
                }),
                "div",
                "card__image"
            ),
            createElement([
                !isShopCard ? rating && Rating({rating: rating}) : null,
                createElement(`${title} (${type})`, "h3"),
                createElement(description, "p", "card__description"),
                createElement(cost, "p", "card__cost"),
            ], "div", "card__content"),
            !isShopCard ? Button("Show more", {isTransparent: true, type: "button"}) : null
        ], "article", "card")
    )
}