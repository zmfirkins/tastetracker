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



// ----------------------
// Problem 3: Log the first 5 popular foods
// ----------------------
console.log("Top 5 popular foods are:");
for (let i = 0; i < 5; i++) {
  console.log(popularFoods[i]);
}

// ----------------------
// Problem 4: Write a function to check if a food is in your list
// ----------------------
function isMyFavorite(food) {
  if (myFavoriteFoods.includes(food)) {
    return `${food} is one of my favorites!`;
  } else {
    return `${food} is not in my top favorites.`;
  }
}
console.log(isMyFavorite("pizza"));
console.log(isMyFavorite("sushi"));

// ----------------------
// Problem 5: Use conditionals to filter foods with names longer than 6 letters
// ----------------------
let longNamedFoods = popularFoods.filter(food => food.length > 6);
console.log("Foods with long names:", longNamedFoods);

// ----------------------
// Problem 6: Compare array lengths
// ----------------------
if (myFavoriteFoods.length > popularFoods.length) {
  console.log("I listed more favorites than the popular list.");
} else {
  console.log("The popular food list is longer than my list.");
}

// ----------------------
// Problem 7: Find common foods between my list and popular list
// ----------------------
let commonFoods = myFavoriteFoods.filter(food => popularFoods.includes(food));
console.log("Foods we both like:", commonFoods);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
