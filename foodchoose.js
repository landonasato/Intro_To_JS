//I want the computer to choose what I should eat because I'm too stupid to make my own decisions.

var foods = [
"Sushi",
"Meat Juhn",
"Udon"
];

var choose = (Math.floor(Math.random() * foods.length));
window.alert(foods[choose]);

