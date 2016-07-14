// write your functions here

//Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

var oldestPerson = function(people){
	var ages = [];
	for(var i in people){
		ages.push(people[i]);
	}
	var oldestIndex = ages.indexOf(Math.max(...ages))
	for(var key in people){
		if(people.hasOwnProperty(key)) {
			if(people[key] === ages[oldestIndex]){
				console.log(i);
			}
		}
	}
};

var people = {
	'Chuck': 22,
	'Brian': 46
};

oldestPerson(people);
//Will return Brian

//--------------------------------//

//Define a function called longestWord that takes a string and returns the longest word in the string.

var longestWord = function(string){
  var words = string.split(" ");
  var lengths = [];
    for(i=0; i<words.length; i++){
    	lengths.push(words[i].length);
    	}
	var longestIndex = lengths.indexOf(Math.max(...lengths));
	console.log(words[longestIndex]);
};


//--------------------------------//

//Refactor the longestWord function so that it ignores punctuation.
// This function does not yet account for if words being input have the same length
var longestWordNoPunc = function(string){
	var punctuationless = string.replace(/\W /g," ");
	punctuationless = string.replace(/\W/g," ");
	var punctuationlessWords = punctuationless.split(" ");
	var lengths =[];
	for(i=0; i<punctuationlessWords.length; i++){
		lengths.push(punctuationlessWords[i].length);
	}
	var longestIndex = lengths.indexOf(Math.max(...lengths));
	console.log(punctuationlessWords[longestIndex]);
};

longestWordNoPunc("hello! hi heyyyyy!");

//--------------------------------//

//Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
var factorial = function(){
	var rand = Math.round(Math.random()*10);
	console.log(rand);
	var fact = rand;
	if(rand === 0){
		console.log(1);
	}
	else {
		for(i=1; i<rand; i++){
			fact = fact * (rand - i);
		}
	}
	console.log(fact);
};

factorial();

//--------------------------------//

//Write a function called palindrome that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
var palindrome = function(string){
	var reverse = "";
	for (i=0; i<string.length; i++){
	reverse = string.split('').reverse().join('');
	}
	console.log(reverse === string);
};

palindrome("radar");
palindrome("cat");
