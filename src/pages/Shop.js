import render from "../utils/render.js";
import Header from "../layouts/Header.js";
import createElement from "../utils/createElement.js";
import Footer from "../layouts/Footer.js";
import ToggleTheme from "../components/ToggleTheme.js";
import Shop from "../sections/Shop.js";

function  App () {
    return [
        Header(),
        createElement([
            Shop(),
            ToggleTheme()
        ], "main"),
        Footer()
    ];
}

render(document.querySelector("#root"), App())