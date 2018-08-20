//Array one will be a cooking method
var cooking = [ 
"Sauted",
"Fried",
"Baked",
"Grilled"
];


//Array two will be a type of food

var food = [
"Steak",
"Shrimp",
"Kalbi",
"Rice",
"Chicken"
];

//Make the computer chooose a food and a way it is cooked

var rand2 = Math.floor(Math.random() * cooking.length);
var rand1 = Math.floor(Math.random() * food.length);
window.alert(cooking[rand1] + " " + food[rand2]);


