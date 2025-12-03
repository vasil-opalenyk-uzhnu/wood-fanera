import createElement from "../utils/createElement.js";

export default (props) => {
    const {rating = 4.5, starsLength = 5} = props;
    const realRating = rating >= starsLength ? starsLength : rating
    let stars = new Array(
        Math.ceil(starsLength * (realRating / starsLength))
    ).fill(0)

    return (
        createElement(
            createElement(
                stars.map((_, i) => (
                    createElement(null, "div", "rating__star", {
                        style: `--fill: ${realRating >= i + 1 ? "100%" : `${Math.round((realRating - i) * 100)}%`}`
                    })
                )),
                "div",
                "rating__stars"
            ),
            "div",
            "rating"
        )
    )
}