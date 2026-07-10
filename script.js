const cuisines = [
  { id: "italian", name: "Italian", image: "images/intalian.jpg", description: "Rustic comfort, fresh herbs, olive oil, tomatoes, and slow-cooked tradition." },
  { id: "japanese", name: "Japanese", image: "images/japanese.jpg", description: "Balanced plates with rice, seafood, broth, vegetables, and clean savory flavors." },
  { id: "greek", name: "Greek", image: "images/greek.jpg", description: "Mediterranean favorites with lemon, oregano, olive oil, grains, and bright salads." },
  { id: "mexican", name: "Mexican", image: "images/mexican.jpg", description: "Colorful dishes built with corn, beans, chilies, herbs, citrus, and satisfying proteins." },
  { id: "french", name: "French", image: "images/french.jpg", description: "Elegant classics with careful technique, aromatics, sauces, and seasonal produce." },
  { id: "spanish", name: "Spanish", image: "images/spanish.jpg", description: "Tapas, rice dishes, smoked paprika, seafood, legumes, and sunny shared plates." },
  { id: "indian", name: "Indian", image: "images/indian.jpg", description: "Layered spices, lentils, vegetables, grains, yogurt, and deeply comforting curries." },
  { id: "thai", name: "Thai", image: "images/Thai.jpg", description: "Sweet, sour, salty, and spicy flavors with herbs, coconut, noodles, and rice." },
  { id: "chinese", name: "Chinese", image: "images/chinese.jpeg", description: "Stir-fries, steamed dishes, noodles, rice, aromatics, and balanced textures." },
  { id: "indonesian", name: "Indonesian", image: "images/indonesian.jpeg", description: "Fragrant rice, sambal, coconut, grilled proteins, peanuts, and spice pastes." },
  { id: "korean", name: "Korean", image: "images/korean.jpeg", description: "Fermented flavor, rice bowls, soups, grilled dishes, vegetables, and bold sauces." }
];

const dishNamesByCuisine = {
  italian: ["Spaghetti Carbonara", "Margherita Pizza", "Mushroom Risotto", "Chicken Parmesan", "Pesto Gnocchi", "Minestrone Soup", "Lasagna Verde", "Caprese Farro Bowl", "Eggplant Parmigiana", "Seafood Linguine"],
  japanese: ["Salmon Teriyaki Bowl", "Chicken Katsu", "Miso Ramen", "Vegetable Sushi Rolls", "Tofu Donburi", "Beef Yakisoba", "Okonomiyaki", "Soba Noodle Salad", "Gyoza Plate", "Tuna Onigiri"],
  greek: ["Chicken Souvlaki", "Greek Lentil Soup", "Spanakopita", "Lamb Kofta Bowl", "Shrimp Saganaki", "Falafel Mezze", "Moussaka", "Chickpea Gyro Bowl", "Greek Salmon Salad", "Stuffed Peppers"],
  mexican: ["Chicken Tacos", "Bean Burrito Bowl", "Fish Taco Plate", "Turkey Enchiladas", "Veggie Fajitas", "Pozole Verde", "Shrimp Tostadas", "Chicken Mole Bowl", "Black Bean Quesadilla", "Carnitas Rice Bowl"],
  french: ["Chicken Ratatouille", "Salmon Nicoise", "Turkey Croque Bowl", "Lentil Cassoulet", "Herb Omelette", "Beef Bourguignon", "Quiche Lorraine", "Provencal Shrimp", "Coq au Vin", "Vegetable Galette"],
  spanish: ["Chicken Paella", "Tortilla Espanola", "Garlic Shrimp Tapas", "Spanish Chickpea Stew", "Gazpacho Bowl", "Patatas Bravas Plate", "Cod with Romesco", "Turkey Albondigas", "Seafood Fideua", "Pisto Manchego"],
  indian: ["Chicken Tikka Masala", "Palak Paneer", "Chana Masala", "Dal Tadka", "Vegetable Biryani", "Tandoori Salmon", "Rajma Rice Bowl", "Paneer Kathi Roll", "Egg Curry", "Masala Dosa Plate"],
  thai: ["Thai Basil Chicken", "Green Curry Tofu", "Pad Thai Shrimp", "Tom Yum Soup", "Peanut Noodle Bowl", "Red Curry Salmon", "Chicken Larb", "Mango Rice Bowl", "Massaman Beef", "Papaya Salad Plate"],
  chinese: ["Kung Pao Chicken", "Mapo Tofu", "Beef and Broccoli", "Vegetable Chow Mein", "Egg Fried Rice", "Steamed Fish Ginger", "Dan Dan Noodles", "Orange Tofu", "Chicken Lettuce Cups", "Hot and Sour Soup"],
  indonesian: ["Chicken Satay", "Nasi Goreng", "Gado-Gado", "Beef Rendang", "Soto Ayam", "Tempeh Rice Bowl", "Mie Goreng", "Fish Pepes", "Coconut Tofu Curry", "Balinese Chicken"],
  korean: ["Bibimbap", "Chicken Bulgogi", "Kimchi Fried Rice", "Tofu Sundubu", "Japchae", "Beef Bulgogi Bowl", "Korean Pancake", "Spicy Pork Bowl", "Gimbap", "Doenjang Stew"]
};

const proteinCycle = ["Chicken", "Tofu", "Lentils", "Salmon", "Eggs", "Beans", "Shrimp", "Paneer", "Beef", "Turkey"];

const dishes = Object.fromEntries(
  cuisines.map((cuisine) => [
    cuisine.id,
    dishNamesByCuisine[cuisine.id].map((name, index) => ({
      id: slugify(name),
      name,
      cuisineId: cuisine.id,
      image: `images/${slugify(name)}.png`,
      fallbackImage: `images/${slugify(name)}.png`,
      proteins: proteinCycle[index % proteinCycle.length],
      calories: 330 + index * 35,
      time: `${25 + index * 4} min`,
      amount: index % 3 === 0 ? "2 servings" : index % 3 === 1 ? "3 servings" : "4 servings",
      ingredients: buildIngredients(name, proteinCycle[index % proteinCycle.length]),
      instructions: buildInstructions(name, cuisine.name)
    }))
  ])
);

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildIngredients(name, protein) {
  return [
    `1 cup ${protein.toLowerCase()}`,
    "1 cup seasonal vegetables",
    "1/2 cup cooked grains or noodles",
    "2 tbsp signature sauce",
    "1 tsp cooking oil",
    "Fresh herbs for garnish",
    "Salt and pepper to taste"
  ];
}

function buildInstructions(name, cuisineName) {
  return [
    `Prep all ingredients for ${name} and keep the sauce, vegetables, and protein separate.`,
    `Cook the protein until tender, then remove it from the pan and keep warm.`,
    `Saute the vegetables with aromatics until bright and lightly softened.`,
    `Add the ${cuisineName.toLowerCase()}-style sauce, grains, and protein back to the pan.`,
    "Simmer briefly, adjust seasoning, garnish, and serve warm."
  ];
}

function getCuisine(id) {
  return cuisines.find((cuisine) => cuisine.id === id) || cuisines[0];
}

function getDish(cuisineId, dishId) {
  return (dishes[cuisineId] || dishes.italian).find((dish) => dish.id === dishId) || dishes[cuisineId || "italian"][0];
}

function renderCuisinePage() {
  const page = document.querySelector("[data-page='cuisine']");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const cuisine = getCuisine(params.get("cuisine"));
  const cuisineDishes = dishes[cuisine.id];

  document.title = `${cuisine.name} Recipes | NutriFit`;
  document.getElementById("cuisine-title").textContent = `${cuisine.name} Recipes`;
  document.getElementById("cuisine-description").textContent = cuisine.description;
  document.getElementById("dish-count").textContent = `${cuisineDishes.length} dishes`;

  document.getElementById("dishes-container").innerHTML = cuisineDishes.map((dish) => `
    <a class="dish-blueprint" href="dish.html?cuisine=${cuisine.id}&dish=${dish.id}">
      <figure class="blueprint-frame">
        <img src="${dish.image}" alt="${dish.name}" class="blueprint-img" onerror="this.onerror=null; this.src='${dish.fallbackImage}';">
      </figure>
      <div class="blueprint-body">
        <h3 class="blueprint-title">${dish.name}</h3>
        <div class="blueprint-metadata">
          <span><i class="fa-solid fa-dumbbell"></i> ${dish.proteins}</span>
          <span class="meta-inline-divider">•</span>
          <span><i class="fa-solid fa-fire"></i> ${dish.calories} cal</span>
        </div>
      </div>
    </a>
  `).join("");
}

function renderDishPage() {
  const page = document.querySelector("[data-page='dish']");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const cuisine = getCuisine(params.get("cuisine"));
  const dish = getDish(cuisine.id, params.get("dish"));

  document.title = `${dish.name} | NutriFit`;
  document.getElementById("dish-title").textContent = dish.name;
  document.getElementById("dish-cuisine").textContent = cuisine.name;
  document.getElementById("dish-image").src = dish.image;
  document.getElementById("dish-image").alt = dish.name;
  document.getElementById("dish-image").onerror = () => {
    document.getElementById("dish-image").onerror = null;
    document.getElementById("dish-image").src = dish.fallbackImage;
  };
  document.getElementById("dish-protein").textContent = dish.proteins;
  document.getElementById("dish-calories").textContent = `${dish.calories} cal`;
  document.getElementById("dish-time").textContent = dish.time;
  document.getElementById("dish-time-copy").textContent = dish.time;
  document.getElementById("dish-amount").textContent = dish.amount;
  document.getElementById("back-to-cuisine").href = `cuisine.html?cuisine=${cuisine.id}`;

  document.getElementById("ingredients-list").innerHTML = dish.ingredients.map((ingredient, index) => `
    <label class="ingredient-item">
      <input type="checkbox" id="ingredient-${index}">
      <span>${ingredient}</span>
    </label>
  `).join("");

  document.getElementById("instruction-list").innerHTML = dish.instructions.map((step, index) => `
    <li>
      <strong>Step ${index + 1}</strong>
      <span>${step}</span>
    </li>
  `).join("");
}

function wireHomePage() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  let scrollInterval;
  let isPaused = false;

  function startScroll() {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      if (!isPaused) carousel.scrollLeft += 3;
    }, 20);
  }

  carousel.addEventListener("mouseenter", () => { isPaused = true; });
  carousel.addEventListener("mouseleave", () => { isPaused = false; });

  document.querySelectorAll(".card").forEach((card) => {
    const name = card.querySelector(".card-name")?.textContent.trim().toLowerCase();
    const cuisine = cuisines.find((item) => item.name.toLowerCase() === name);
    if (!cuisine) return;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      window.location.href = `cuisine.html?cuisine=${cuisine.id}`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.href = `cuisine.html?cuisine=${cuisine.id}`;
    });
  });

  startScroll();
}

wireHomePage();
renderCuisinePage();
renderDishPage();
