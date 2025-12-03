import Section from "../layouts/Section.js";
import {PRODUCTS} from "../utils/constants.js";
import CardList from "../components/CardList.js";

export default () => {
    const TopSelling = PRODUCTS.reduce((acc, product) => {
        if (acc.length >= 3) return acc;

        return [...acc, product];
    }, []);

    return (
        Section(CardList({cards: TopSelling}), {
            title: "Top selling",
            containerClass: "container-big"
        })
    )
}