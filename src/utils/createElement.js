import render from "./render.js";

export default (children = [], tagName = "div", className = "", attributes = {}, eventHandlers = {}) => {
    const element = document.createElement(tagName);

    if(className) element.classList.add(...className.split(" "));

    if(attributes) {
        for (const attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
    }

    if(eventHandlers) {
        for (const eventHandler in eventHandlers) {
            element.addEventListener(eventHandler, eventHandlers[eventHandler]);
        }
    }

    if(children && children.length !== 0) render(element, children);

    return element;
}