import createElement from "../utils/createElement.js";

export default () => {
    function handleClick(e) {
        e.preventDefault();

        const burger = document.querySelector(".burger");
        const dialog = document.querySelector(".dialog");

        if(burger && dialog) {
            document.body.classList.toggle("no-scroll");
            burger.classList.toggle("burger--open");
            dialog.classList.toggle("dialog--open");
        }
    }

    return (
        createElement(
            createElement(
                createElement(null, "span"),
                "div",
                "burger__wrapper"
            ),
            "button",
            "burger",
            {},
            {
                click: handleClick
            }
        )
    )
}