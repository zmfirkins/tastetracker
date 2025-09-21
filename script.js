// Taste Tracker Example
// Solutions to 10 problems using arrays, functions, loops, and conditionals.

// ----------------------
// Problem 1: Create arrays to store food data
// ----------------------
let myFavoriteFoods = ["chicken", "tacos", "ramen", "burgers", "ice cream"];
let popularFoods = [
  "pizza", "pasta", "sushi", "burgers", "tacos", "ramen", "fried chicken",
  "salad", "sandwich", "steak", "pancakes", "curry", "dumplings", "burrito",
  "hot dog", "donuts", "pho", "bagel", "lasagna", "ramen"
];

// ----------------------
// Problem 2: Log your favorite foods
// ----------------------
console.log("My favorite foods are:");
for (let food of myFavoriteFoods) {
  console.log(food);
}



// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."




// 4b. Call the function at least 3 times



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.



// 6. Store the result in an array called foodsWithA. Print out the array.



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.



// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
