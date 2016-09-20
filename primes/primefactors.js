/*

Given a number n, write an efficient function to print all prime factors of n. 

For example, if the input number is 12, then output should be “2 2 3″. means -> 2*2 * 3

If the input number is 15, then output should be “3 5″. means -> 3 * 5

If the input number is 20, then output should be “2 2 5″. means -> 2*2 * 5

If the input number is 315, then output should be “3 3 5 7″. means -> 3*3*3 * 5 * 7

Source - geeksforgeeks

*/

var factors = [];

function genfactor(n, callback) {

	while (n%2==0) {

		factors.push(2);
		n=n/2;

	}


	for (var i = 3; i <= Math.sqrt(n); i=i+2) {
		
		while (n%i==0) {

			factors.push(i);
			n=n/i;
		
		}
	}

	if (n>2) factors.push(n);

}

genfactor(20); // calculate primae factors of 20
console.log(factors);