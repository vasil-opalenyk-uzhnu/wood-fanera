import createElement from "../utils/createElement.js";
import InputText from "./InputText.js";
import CategoryList from "./CategoryList.js";
import FormControl from "./FormControl.js";
import PriceControl from "./PriceControl.js";

export default (props) => {
    const {
        onFilterChange,
        filterParams
    } = props;

    return (
        createElement([
            createElement("Filter", "h2", "filter__title"),
            createElement([
                InputText({type: "search", id: "search", placeholder: "Search..."}),
                FormControl({
                    title: "Put Category",
                    children: CategoryList()
                }),
                FormControl({
                    title: "Price",
                    children: PriceControl({price: filterParams.price}),
                })
            ], "form", "filter__form", null, {input: onFilterChange})
        ], "aside", "filter")
    )
}