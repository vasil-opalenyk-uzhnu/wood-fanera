import createElement from "../utils/createElement.js";

export default (props) => {
    const {price} = props;

    return (
        createElement([
            createElement(
                createElement(null, "input", "price-control__input", {
                    name: "price",
                    type: "number",
                    placeholder: "From",
                    id: "min",
                    min: price.min,
                    max: price.max,
                    value: price.min
                }), "label", "price-control__label"
            ),
            createElement(
                createElement(null, "input", "price-control__input", {
                    name: "price",
                    type: "number",
                    placeholder: "to",
                    id: "max",
                    min: price.min,
                    max: price.max,
                    value: price.max
                }), "label", "price-control__label"
            )
        ], "div", "price-control")
    )
}