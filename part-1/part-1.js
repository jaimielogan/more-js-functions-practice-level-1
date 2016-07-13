// write your functions here

//Summation
var sum = function(a,b){
  console.log(a+b);
};

// Checks if numbers are equal
var isEqual = function(a,b){
  return a === b;
};

// Returns discount amount given total amount and discount percentage (0-100)
function discountPercentage(x,y){
  if(y < 0 || y>100){
    console.log("Return a valid discount percent");
  }
  else {
    console.log(x*(y/100));
  }
}

// Given a string, return the string with the first letter of each word capitalized
function stringCapitalize(string1){
  var words = string1.split(" ");
  for(i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  console.log(words.join(" "));
}

// Take a random integer from 0-100 and return all even integers from 0 to the random number
var evenNumbers = function(){
  var random = Math.round(Math.random()*100);
  for (i=0; i<random; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }
};

// Takes two arguments and returns true if the 1st is divisble by the second one
var isDivisible = function(a,b){
  return a % b === 0; 
};

//Return Odd Numbers 0-40 if random <40, or 40-100 if random >40
var oddNumbers = function(){
  var rando = Math.round(Math.random()*100);
  if(rando <= 40){
    for(i =0; i<= 40; i++){
      if(i % 2 !== 0){
        console.log(i);
      }
    }
  }
  else{
    for(i=40; i<=rando; i++){
      if(i % 2 !== 0){
        console.log(i);
      }
    }
  }
};
