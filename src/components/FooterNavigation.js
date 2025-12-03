import createElement from "../utils/createElement.js";
import Navigation from "./Navigation.js";
import ContactsList from "./ContactsList.js";

export default () => {
    return (
        createElement([
            Navigation({title: "Menu", isVertical: true}),
            ContactsList()
        ], "div", "footer-nav")
    )
}