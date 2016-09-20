/*

Sieve of Eratosthenes

Given a number n, print all primes smaller than or equal to n. It is also given that n is a small number.
For example, if n is 10, the output should be “2, 3, 5, 7″. If n is 20, the output should be “2, 3, 5, 7, 11, 13, 17, 19″.

The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.

Source - geeksforgeeks

Additional Info - 

# Prime numbers tested upto 50000000, Time taken - 2s

# Time - O(nloglogn)
# Space - O(n)

*/

var result = [];

function sieve(n) {
	
	var primes = [n+1];
	for (var index = 0; index < n; index++)
	{
		primes[index] = true;
	}

	for (var i = 2; i*2 <= n; i++) {

		if (primes[i]==true) {

			for (var j = i*2; j <= n; j = j + i) {
				primes[j] = false;
				
			}
			
		}
	}

	for (var m = 2; m <= n; m++) {
		
		if(primes[m]==true) {

			result.push(m);
		}
	}

	console.log('Primes are = > \n' + result + '\n');
}

var k = 50000;
sieve(k);