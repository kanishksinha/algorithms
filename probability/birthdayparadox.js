/**
 * How many people must be there in a room to make the probability 100% that two people in the room have same birthday?
Answer: 367 (since there are 366 possible birthdays, including February 29).

How many people must be there in a room to make the probability 50% that two people in the room have same birthday?
Answer: 23

The number is surprisingly very low. In fact, we need only 70 people to make the probability 99.9 %.

Below is the solution written in JavaScript

Source - http://www.geeksforgeeks.org/birthday-paradox/

 */

function count(probability) {

	return Math.ceil(Math.sqrt(2*365*Math.log(1/(1-probability))));
	
}

console.log(' ');
console.log('Exact number of people that must be there in a room to make the probability 50% that two people in the room have same birthday');
console.log(' ');
console.log(count(.50)); // probability 50%)
