import createElement from "../utils/createElement.js";
import Card from "./Card.js";
import Button from "./Button.js";

export default (props) => {
    const {cards, isButton = true, isShop = false} = props;

    return (
        createElement([
            createElement(
                cards ? cards.map(card => createElement(Card({...card, isShopCard: isShop}), "li")) : null,
                "ul",
                `card-list${isShop ? " card-list--shop" : ""}`
            ),
            isButton ? !isShop ? Button("Go to shop", {link: "shop.html#shop"}) : null : null
        ], "div")
    )
}