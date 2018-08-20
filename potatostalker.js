//Create an array of adjectives

var adjectives = ["Potato", "Tomato", "Carrot", "Bowl of Rice", "Noodle"];

//Ask the user for his or her name

var name = prompt("What is your name?");

//Create a random number

var follow = Math.floor(Math.random() * adjectives.length);


//Tell the user that he or she "is" followed by the objective

window.alert(name + " " + "is being followed by a " + adjectives[follow]);
