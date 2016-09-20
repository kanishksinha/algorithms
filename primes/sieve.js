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

	console.log('Primes are = > ' + result);
}

var k = 50;
sieve(k);