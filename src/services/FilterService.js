export default class FilterService {
    static filterProducts(products = [], filterParams = {search: "", selectedCategory: [], price: {min: 0, max: 100}}) {
        return products.filter(({title, type, cost}) => {
            const {search, selectedCategory, price} = filterParams;

            let searchCondition = title.toLowerCase().includes(search.toLowerCase());
            let categoryCondition = selectedCategory.length !== 0 ? selectedCategory.includes(type) : true;
            let priceCondition = cost >= price.min && cost <= price.max;

            return searchCondition && categoryCondition && priceCondition;
        });
    }
}