var prompt = require('prompt');
var newnum;


prompt.start();
prompt.get(['number'], function (err, result) {

  newnum = result.number;

  var no = reverse_number(newnum, function (err, res) 
  
  {

    if (err) throw err;
    
    console.log('reverse is - ' + res);

  });

});

function reverse_number(n, callback) {

  console.log('reversing a number ' + n);
  var m = n.length;
  var i;
  var str = '';

  for (i = 0; i < m; i++) {
    
    str = n.charAt(i) + str;
    console.log('reverse character ' + str );

  }

  callback (null, str);  

}



