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
    getDescription() {
        const ingredientList = this.ingredients.map(ing => ing.name).join(", ");
        const toppingList = this.toppings.map(topping => topping.name).join(", ");
        
        return `
            Size: ${this.size}<br>
            Ingredients: ${ingredientList}<br>
            Extras: ${this.extras}<br>
            Sweetener: ${this.sweetener}<br>
            Toppings: ${toppingList}<br>
            Blending Style: ${this.blendingStyle}
        `;
    }
}

document.getElementById("order-btn").addEventListener("click", function() {
    const size = document.getElementById("size").value;
    const ingredientElements = document.querySelectorAll("input[name='ingredient']:checked");
    const ingredients = Array.from(ingredientElements).map(element => ({
        name: element.value,
        price: element.dataset.price
    }));
    const extras = document.getElementById("extras").value;
    const sweetener = document.getElementById("sweetener").value;
    const blendingStyle = document.getElementById("blending-style").value;

    const toppingElements = document.querySelectorAll("input[name='topping']:checked");
    const toppings = Array.from(toppingElements).map(element => ({
        name: element.value,
        price: element.dataset.price
    }));

    const smoothie = new Smoothie(size, ingredients, extras, sweetener, toppings, blendingStyle);

    document.getElementById("order-description").innerHTML = smoothie.getDescription();
    document.getElementById("order-price").innerHTML = `<strong>Total Price: $${smoothie.calculatePrice()}</strong>`;
});
