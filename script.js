//For Professor: I redid the assignment in notepad first to figure out which ones were wrong.. I'm not sure why they were different at first

console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Chicken", "Tacos", "Burgers", "Ice Cream", "Pizza", "Pasta"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let food of favoriteFoods) {
  console.log(`One of my favorite foods is ${food}.`);
}

// 3. Print out the rating for each food with a ranking
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
  console.log(`Have you ever tried ${foodName}?`);
  console.log(`I always recommend ${foodName} to friends.`);
  console.log(`Trust me — ${foodName} is delicious.`);
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Chicken");
printFoodRecommendation("Pizza");
printFoodRecommendation("Sushi");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
  "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi",
  "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup",
  "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas",
  "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine",
  "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print out only foods that have an "a" in the name.
for (let food of friendFavorites) {
  if (food.toLowerCase().includes("a")) {
    console.log(food);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = friendFavorites.filter(food => food.toLowerCase().includes("a"));
console.log("Foods with 'a':", foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(food => food.length > 6);
console.log("Long food names:", longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);
console.log("Short food names:", shortFoodNames);

// 9. Print both arrays and compare
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are an equal number of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print
let longestFood = friendFavorites.reduce((a, b) => (a.length > b.length ? a : b));
console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`);
