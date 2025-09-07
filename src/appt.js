function apptFunction() {
    const foodDiv = document.querySelector("#food");
    foodDiv.innerHTML = "";

    apptInfo.forEach(item => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = item.title;
        title.style.gridColumn = "1";
        title.style.gridRow = "1";

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = item.price;
        price.style.gridColumn = "2";
        price.style.gridRow = "1";

        const subtitle = document.createElement("div");
        subtitle.textContent = item.subtitle;
        subtitle.style.gridColumn = "1 / -1"; 
        subtitle.style.gridRow = "2";

        foodItem.appendChild(title);
        foodItem.appendChild(price);
        foodItem.appendChild(subtitle);

        foodDiv.appendChild(foodItem);
        foodDiv
    }
);

}

const apptInfo = [
  {
    title: "Grilled Fish",
    subtitle: "Delicious grilled fish served with lime",
    price: "32$"
  },
  {
    title: "Bruschetta",
    subtitle: "Toasted bread topped with fresh tomatoes and basil",
    price: "10$"
  },
  {
    title: "Stuffed Mushrooms",
    subtitle: "Mushrooms filled with cheese and herbs",
    price: "12$"
  },
  {
    title: "Chicken Wings",
    subtitle: "Spicy wings served with ranch dip",
    price: "15$"
  },
  {
    title: "Spring Rolls",
    subtitle: "Crispy rolls with vegetables and sweet chili sauce",
    price: "9$"
  },
  {
    title: "Mozzarella Sticks",
    subtitle: "Fried mozzarella cheese with marinara dip",
    price: "11$"
  },
  {
    title: "Shrimp Cocktail",
    subtitle: "Chilled shrimp served with cocktail sauce",
    price: "14$"
  },
  {
    title: "Garlic Bread",
    subtitle: "Toasted baguette slices with garlic butter",
    price: "7$"
  },
  {
    title: "Nachos",
    subtitle: "Tortilla chips with melted cheese and jalapeños",
    price: "13$"
  },
  {
    title: "Caprese Skewers",
    subtitle: "Tomato, mozzarella, and basil on skewers",
    price: "10$"
  },
  {
    title: "Deviled Eggs",
    subtitle: "Classic deviled eggs with a hint of mustard",
    price: "8$"
  },
  {
    title: "Fried Calamari",
    subtitle: "Lightly breaded calamari rings with aioli",
    price: "16$"
  },
  {
    title: "Spinach Artichoke Dip",
    subtitle: "Warm creamy dip served with pita chips",
    price: "13$"
  },
  {
    title: "Mini Sliders",
    subtitle: "Beef sliders with cheddar and caramelized onions",
    price: "17$"
  },
];


export { apptFunction };

