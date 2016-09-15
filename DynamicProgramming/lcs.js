/* Program to print longest common subsequence
 
 It is a classic computer science problem, the basis of diff (a file comparison program that outputs the differences between two files), 
 and has applications in bioinformatics.
 


var prompt = require('prompt');

var x='AGGTABAGGTABAGGTABAGGTABAGGTABAGGTABAGGTAB';
var y='GXTXAYBGXTXAYBGXTXAYBGXTXAYBGXTXAYBGXTXAYBGXTXAYB';

var m = x.length;
var n = y.length;

function lcs(x, y, m, n) {

	console.log('x - ' + x + ' and Y - ' + y);
	console.log('m - ' + m + ' and n - ' + n);

	if (m==0 || n==0) return 0;

	else if (x[m-1] == y[n-1]) return 1 + lcs(x, y, m-1, n-1);

	else return max(lcs(x, y, m, n-1), lcs(x, y, m-1, n));
	
}

function max(a, b) {
	
	return Math.max(a, b);
}

var k = lcs(x, y, m, n);
console.log('LCS is - ' + k);

*/
var x='AGGTAB';
var y='GXTXAYB';

var m = x.length;
var n = y.length;

	
	var L = []; 

	for (var c = 0; c < n; c++) {

		L[c] = new Array();
		for (var d = 0; d < m; d++) {

			L[c][d]  = 0;

		}

	}

function lcs(x, y, m, n) {


	var i, j;

	for (i=0;i<=m;i++) {

		for (j=0;j<=n;j++) {

			if (i==0 || j==0) {
				L[i][j] = 0;
			}

				else if (x[i-1] == y[j-1]) {
				L[i][j] = L[i-1][j-1] + 1;
				console.log('LCS is - ' + L);	
			}
			
			else
				L[i][j] = max(L[i-1][j], L[i][j-1]);

		}
	}

	return L[m][n];

}

function max(a, b) {
	
	return Math.max(a, b);

}

var k = lcs(x, y, m, n);
console.log('LCS is - ' + k);	



