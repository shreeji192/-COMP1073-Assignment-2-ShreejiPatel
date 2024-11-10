class Smoothie {
    constructor(size, ingredients, extras, sweetener, toppings, blendingStyle) {
        this.size = size;
        this.ingredients = ingredients;
        this.extras = extras;
        this.sweetener = sweetener;
        this.toppings = toppings;
        this.blendingStyle = blendingStyle;
    }

    calculatePrice() {
        let basePrice = { small: 3.00, medium: 4.00, large: 5.00 }[this.size];
        let ingredientCost = this.ingredients.reduce((total, ing) => total + parseFloat(ing.price), 0);
        let extraCost = this.extras !== "none" ? 1.00 : 0.00;
        let sweetenerCost = this.sweetener !== "none" ? 0.50 : 0.00;
        let toppingCost = this.toppings.reduce((total, topping) => total + parseFloat(topping.price), 0);

        return (basePrice + ingredientCost + extraCost + sweetenerCost + toppingCost).toFixed(2);
    }
