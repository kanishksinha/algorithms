/*

Wilson’s theorem states that a natural number p > 1 is a prime number if and only if 
 	
		(p - 1) ! ≡  -1   mod p
OR  (p - 1) ! ≡  (p-1) mod p
 
Example - 

p = 5;
(p-1)! = 24
24 % 5 = 4

Additional info - 

# Wilson's theorem has been used to construct formulas for primes, but they are too slow to have practical value.

*/

function factorial(n, callback) {
	
	var fact=1;

	for (var i = 1 ; i <= n ; i++) {

		fact = fact*i;
	}

	callback (null, fact % (n+1));
}

function wilson(p, callback) {

	factorial(p-1, function (err, res) {

			console.log('computed factorial mod = ' + res);
			
			var x = p-1;

			if(res==x) {
				callback(null, true);
			}
			else callback(null, false);
	});
	
}

wilson(23, function (err, result) {

	console.log(result);
		
	if (result==true) console.log('Number is prime');
		
	else console.log('Number is not prime');	

});
