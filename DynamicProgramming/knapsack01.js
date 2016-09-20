// w - max weight
// wt - array for weights
// val - item values
// n - number of items

var x, y, i, j;

var L = []; 

function knpsck(w, wt, val, n) {

	console.log('passed values are - ' + w + ' ' + wt + ' ' + val + ' ' + n);

	for (x = 0; x <= w; x++) {

	L[x] = new Array();
	for (y = 0; y <= n ; y++) {

			L[x][y]  = 0;
		
		}

	}

	console.log(L);

	for (i = 0; i <= n; i++) {

		for (j = 0; j <= w; j++) {

			if (i==0||j==0) {
				
				L[i][j] = 0;

			}	

			// when (n-1)th item is less given weight j
			else if (wt[i-1] <= j) {

				L[i][j] = max(val[i-1] + L[i-1][j-wt[i-1]], L[i-1][j]);
	
			}		

			else L[i][j] = L[i-1][j];

		}
	}

	
	console.log('n - ' + n + ' w - ' + w);
	return L[n][w];

}

function max(a, b) {
	
	return Math.max(a, b);

}

var values = [60, 250, 420];
var weights = [10, 20, 30];
var len = 3;
var maxw = 50;

console.log('Max value in knapsack is - ' + knpsck(maxw, weights, values, len));
