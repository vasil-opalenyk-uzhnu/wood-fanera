import createElement from "../utils/createElement.js";

if(localStorage.getItem("theme")) {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
}else {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if(mediaQuery.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}

export default () => {
    function handlerClick(e) {
        e.preventDefault();
        const root = document.documentElement;

        if(root.getAttribute("data-theme") === "dark") {
            root.setAttribute("data-theme", "light");
        }else {
            root.setAttribute("data-theme", "dark");
        }

        localStorage.setItem("theme", root.getAttribute("data-theme"));
    }

    return (
        createElement(
            createElement(null, "div", "toggle-theme__image"),
            "button",
            "toggle-theme",
            null,
            {
                click: handlerClick
            }
        )
    )
}