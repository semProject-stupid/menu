function courseFunction() {
    const foodDiv = document.querySelector("#food");
    foodDiv.innerHTML = "";

    mainCourseInfo.forEach(item => {
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
    });
}

const mainCourseInfo = [
  {
    title: "Grilled Ribeye Steak",
    subtitle: "Juicy ribeye steak grilled to perfection with herb butter",
    price: "45$"
  },
  {
    title: "Roast Chicken",
    subtitle: "Slow-roasted chicken served with rosemary potatoes",
    price: "28$"
  },
  {
    title: "Spaghetti Carbonara",
    subtitle: "Classic Roman pasta with egg, cheese, pancetta, and pepper",
    price: "22$"
  },
  {
    title: "Vegetable Stir-Fry",
    subtitle: "Seasonal veggies sautéed with soy-ginger glaze",
    price: "18$"
  },
  {
    title: "Lamb Chops",
    subtitle: "Grilled lamb chops served with mint yogurt sauce",
    price: "39$"
  },
  {
    title: "Seafood Paella",
    subtitle: "Spanish rice with shrimp, mussels, and saffron",
    price: "36$"
  },
  {
    title: "Beef Bourguignon",
    subtitle: "French stew with braised beef, mushrooms, and red wine",
    price: "33$"
  },
  {
    title: "Chicken Alfredo",
    subtitle: "Creamy Alfredo sauce over fettuccine and grilled chicken",
    price: "24$"
  },
  {
    title: "Stuffed Bell Peppers",
    subtitle: "Bell peppers filled with rice, veggies, and cheese",
    price: "20$"
  },
  {
    title: "Pan-Seared Salmon",
    subtitle: "Served with lemon dill sauce and sautéed greens",
    price: "30$"
  }
];

export { courseFunction };
