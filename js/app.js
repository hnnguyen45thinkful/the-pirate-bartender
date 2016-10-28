//Define the bartender function which refer to the specific object instance which you are working with pirate.
var Bartender= function(pirate){
	this.pirate = pirate
}
//Creating the global variables for the starting (state) and questions and also the ingredients.
var state= {
	currentQuestionIndex: 0,
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
//Creating a pantry objects array with all the ingredients from strong to fruity look above for more.
var pantryIngredients = [strongIngredients, saltyIngredients, bitterIngredients, sweetIngredients, fruityIngredients];

// Creating the object create for the bartender object from the pirate function from above var Bartender= function(pirate){ this.pirate = pirate
var pirateBartender= Object.create(Bartender.prototype)

//Now I need to create bartender functions which shows all the methods shared and shows the ingredients from the user's preferences randomly. From there, creates a drink with a cool nickname.
Bartender.prototype.createDrink= function(state){
	if (state.userPreferences.length===0) return ["No ingredients for you, I am SOBER!!!"]
	var drink = state.userPreferences.map(function(index){
		var ingredientCategory = pantryIngredients[index] // ["slice of orange", "dash of cassis", "cherry on top"]
		return ingredientCategory[Math.floor(Math.random()*ingredientCategory.length)]
	})
	return drink
}
// Creating a cocktail name with adjectives and nouns and combining it into a name display in red.
var cocktailNameCreator = function(){
	return cocktailNames.getRandomAdjective() + " " + cocktailNames.getRandomNoun();
}
// Creating a question that displays what the user's preferences with array of questions one at a time and then from above will give it a cool nickname or name in the preferences.
var currentQuestion = function(state){
	return arrayQuestions[state.currentQuestionIndex];
}