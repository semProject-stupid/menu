function dessertFunction() {
    const foodDiv = document.querySelector("#food");
    foodDiv.innerHTML = "";

    dessertInfo.forEach(item => {
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

const dessertInfo = [
  {
    title: "Chocolate Lava Cake",
    subtitle: "Warm chocolate cake with molten center",
    price: "9$"
  },
  {
    title: "Cheesecake",
    subtitle: "Creamy New York-style cheesecake with strawberry topping",
    price: "8$"
  },
  {
    title: "Tiramisu",
    subtitle: "Classic Italian dessert with espresso and mascarpone",
    price: "10$"
  },
  {
    title: "Crème Brûlée",
    subtitle: "Vanilla custard topped with caramelized sugar",
    price: "9$"
  },
  {
    title: "Fruit Tart",
    subtitle: "Buttery crust filled with pastry cream and fresh fruit",
    price: "7$"
  },
  {
    title: "Ice Cream Sundae",
    subtitle: "Vanilla ice cream with chocolate syrup and cherries",
    price: "6$"
  },
  {
    title: "Molten Caramel Cake",
    subtitle: "Rich caramel-filled cake served warm",
    price: "10$"
  },
  {
    title: "Apple Pie",
    subtitle: "Classic pie with spiced apples and flaky crust",
    price: "7$"
  },
  {
    title: "Banana Split",
    subtitle: "Three scoops of ice cream with banana, nuts, and syrup",
    price: "8$"
  },
  {
    title: "Churros",
    subtitle: "Fried dough sticks coated in cinnamon sugar, with chocolate dip",
    price: "7$"
  }
];

export { dessertFunction };
