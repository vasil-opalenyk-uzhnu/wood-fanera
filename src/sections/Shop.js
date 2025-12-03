import createElement from "../utils/createElement.js";
import Section from "../layouts/Section.js";
import Filter from "../components/Filter.js";
import CardList from "../components/CardList.js";
import {PRODUCTS} from "../utils/constants.js";
import FilterService from "../services/FilterService.js";

export default () => {
    const filterParams = {
        search: "",
        selectedCategory: [],
        price: {min: 0, max: 100}
    }

    function handleFilterChange(e) {
        e.preventDefault();
        const formElements = e.currentTarget.elements;
        filterParams.search = formElements.search.value;
        filterParams.selectedCategory = [...formElements.categories].filter(el => el.checked).map(el => el.value);
        filterParams.price = {
            min: parseFloat(formElements.min.value),
            max: parseFloat(formElements.max.value)
        }

        //rerender cards list
        const cardsList = document.querySelector(".card-list--shop");
        cardsList.removeEventListener("input", handleFilterChange);
        cardsList.replaceWith(CardList({
            cards: FilterService.filterProducts(PRODUCTS, filterParams),
            isButton: false,
            isShop: true
        }));
    }

    return (
        Section(createElement([
            Filter({onFilterChange: handleFilterChange, filterParams}),
            CardList({
                cards: FilterService.filterProducts(PRODUCTS, filterParams),
                isButton: false,
                isShop: true
            })
        ], "div", "shop__wrapper"), {containerClass: "container-big", isLast: true, id: "shop"})
    )
}