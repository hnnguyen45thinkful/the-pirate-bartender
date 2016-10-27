//Define the bartender function which refer to the specific object instance which you are working with pirate.
var Bartender= function(pirate){
	this.pirate = pirate
}
//Creating the global variables for the starting (state) and questions and also the ingredients.
var state= {
	currentQuestionIndex:0 ,
	userPreferences: []
}
//Creating each questions in the array.
var arrayQuestions = [
	"Do ye like yer drinks strong?",
	"Do ye like it with a salty tang?",
	"Are ye a lubber who likes it bitter?",
	"Would ye like a bit of sweetness with yer poison?",
	"Are ye one for a fruity finish?"
]

//Creating the ingredients objects
var strongIngredients = ["glug of rum", "slug of whisky", "splash of gin"];
var saltyIngredients = ["olive on a stick", "salt-dusted rim", "rasher of bacon"];
var bitterIngredients = ["shake of bitters", "splash of tonic", "twist of lemon peel"];
var sweetIngredients = ["sugar cube", "spoonful of honey", "splash of cola"];
var fruityIngredients = ["slice of orange", "dash of cassis", "cherry on top"];

//Creating the cocktail names object for each one with random adjectives nouns
//Here is the adjectives for the following drinks http://adjective1.com/for-drinks/
//Here is the nouns for the following drinks http://adjective1.com/for-drinks/
var cocktailNames = {
	adjectives: ["Fuzzy", "Salty", "Illegal", "Infamous", "Dirty", "Sea", "Ruthless"],
	nouns: ["Vessel", "First-Mate", "Eye", "Ship", "Maggot", "Float", "Parrot"],
	getRandomAdjective: function(){
		return cocktailNames.adjectives[Math.floor(Math.random()*cocktailNames.adjectives.length)]
	},
	getRandomNoun: function(){
		return cocktailNames.nouns[Math.floor(Math.random()*cocktailNames.nouns.length)]
	},
}
