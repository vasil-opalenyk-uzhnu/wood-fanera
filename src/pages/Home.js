import render from "../utils/render.js";
import Header from "../layouts/Header.js";
import createElement from "../utils/createElement.js";
import Hero from "../sections/Hero.js";
import TopSelling from "../sections/TopSelling.js";
import AboutUs from "../sections/AboutUs.js";
import Contacts from "../sections/Contacts.js";
import Footer from "../layouts/Footer.js";
import ToggleTheme from "../components/ToggleTheme.js";

function  App () {
    return [
        Header(),
        createElement([
            Hero(),
            TopSelling(),
            AboutUs(),
            Contacts(),
            ToggleTheme()
        ], "main"),
        Footer()
    ];
}

render(document.querySelector("#root"), App())