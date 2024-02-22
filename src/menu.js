export function menuPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');
    
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './images/PNB_Logo.png');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const pizzaTitle = document.createElement('div');
    pizzaTitle.classList.add('pizza-title');
    pizzaTitle.innerHTML = 'PIZZA';

    pizzas.forEach(pizza => {
        const card = document.createElement("div");
        card.classList.add("pizza-card");

        const name = document.createElement("div");
        name.classList.add('pizza-name');
        name.textContent = pizza.name;

        const description = document.createElement("div");
        description.classList.add('description');
        description.textContent = pizza.description;

        const mediumPrice = document.createElement("div");
        mediumPrice.classList.add('price');
        mediumPrice.textContent = `Medium 14": $${pizza.mediumPrice.toFixed(2)}`;

        const largePrice = document.createElement("div");
        largePrice.classList.add('price');
        largePrice.textContent = `Large 18": $${pizza.largePrice.toFixed(2)}`;

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(mediumPrice);
        card.appendChild(largePrice);

        menuContainer.appendChild(card);
    });

    container.appendChild(logo);
    container.appendChild(pizzaTitle);
    container.appendChild(menuContainer);
    content.appendChild(container);
}

const pizzas = [
    {
        name: "Margherita",
        description: "Classic tomato, mozzarella, and basil",
        mediumPrice: 9.99,
        largePrice: 12.99
    },
    {
        name: "Pepperoni",
        description: "Pepperoni, mozzarella, and tomato sauce",
        mediumPrice: 10.99,
        largePrice: 14.99
    },
    // Add more pizza objects as needed
];