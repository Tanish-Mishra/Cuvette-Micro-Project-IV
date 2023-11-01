const food = require("./food.json");
//    Output All the food items with their FoodName as Vegetable
console.log("FoodName as Vegetable");
console.log("--------------");
food.forEach((element) => {
  if (element.category === "Vegetable") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
});
                   
//    Output All the food items with their FoodName as Fruit
console.log("FoodName as Fruit");
console.log("--------------");

food.forEach((element) => {
  if (element.category === "Fruit") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
});

//    Output All the food items with their FoodName as Protein
console.log("FoodName as Protein");
console.log("--------------");
food.forEach((element) => {
  if (element.category === "Protein") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
}) /
  //    Output All the food items with their FoodName as Nuts
  console.log("FoodName as Nuts");
console.log("--------------");
food.forEach((element, index, array) => {
  if (element.category === "Nuts") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
});
//    Output All the food items with their FoodName as Grains
console.log("FoodName as Grains");
console.log("--------------");
food.forEach((element) => {
  if (element.category === "Grain") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
});
//    Output All the food items with their FoodName as dairy
console.log("FoodName as Dairy");
console.log("--------------");

food.forEach((element) => {
  if (element.category === "Dairy") {
    console.log(`Food Name : ${element.foodname}`);
    console.log(`Category: ${element.category}`);
    console.log(`Calories: ${element.calorie}`);
    console.log(`Proteins: ${element.protiens}`);
    console.log(`Carbohydrates: ${element.cab}`);
    console.log("--------------");
  }
});

let calGreater = food.filter((element) => {
  return element.calorie > 100;
});

console.log(calGreater);

let calSmaller = food.filter((element) => {
  return element.calorie < 100;
});

console.log(calSmaller);

// list all the food items with highest protien content to lowest

console.log("All the Protein Content with highest Protein content to lowest ");
console.log("--------------");

let proteinHToL = food.sort((a, b) => {
  return b.protiens - a.protiens;
});

proteinHToL.forEach((element) => {
  console.log(`Food Name : ${element.foodname}`);
  console.log(`Category: ${element.category}`);
  console.log(`Calories: ${element.calorie}`);
  console.log(`Proteins: ${element.protiens}`);
  console.log(`Carbohydrates: ${element.cab}`);
  console.log("--------------");
});

console.log("FoodName as lowest to highest");
console.log("--------------");
let proteinLToH = food.sort((a, b) => {
  return a.protiens - b.protiens;
});

proteinLToH.forEach((element) => {
  console.log(`Food Name : ${element.foodname}`);
  console.log(`Category: ${element.category}`);
  console.log(`Calories: ${element.calorie}`);
  console.log(`Proteins: ${element.protiens}`);
  console.log(`Carbohydrates: ${element.cab}`);
  console.log("--------------");
});
