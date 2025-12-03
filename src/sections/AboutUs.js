import Section from "../layouts/Section.js";
import createElement from "../utils/createElement.js";

export default () => {
    const content = (
        createElement([
            createElement(
                `At Wood&Fanera, we create handcrafted wooden products from that bring warmth,
                 beauty, and functionality into everyday life. Guided by sustainability and craftsmanship, 
                 out mission is to design timeless and eco-friendly pieces that connect nature, craft, 
                 and people.`,
                "p",
                "about-us__text"
            ),
            createElement([
                createElement(
                    createElement(null, "img", null, {
                        src: "/img/about/01.png",
                        alt: "About Us",
                        width: "400",
                        height: "267",
                        loading: "lazy"
                    }),
                    "div",
                    "about-us__image"
                ),
                createElement(
                    createElement(null, "img", null, {
                        src: "/img/about/02.png",
                        alt: "About Us",
                        width: "400",
                        height: "267",
                        loading: "lazy"
                    }),
                    "div",
                    "about-us__image"
                )
            ], "div", "about-us__images")
        ], "div", "about-us")
    )

    return (
        Section(content, {
            title: "About us",
            id: "about"
        })
    )
}