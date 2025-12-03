import createElement from "../utils/createElement.js";
import Logo from "../components/Logo.js";
import Navigation from "../components/Navigation.js";
import Burger from "../components/Burger.js";
import Dialog from "../components/Dialog.js";

export default () => {
    return (
        createElement(
            createElement(
                [
                    Logo({isSmall: true}),
                    Navigation({}),
                    Dialog({children: Navigation({isVertical: true})}),
                    Burger(),
                ],
                "div",
                "header__container container"
            ),
            "header",
            "header"
        )
    )
}