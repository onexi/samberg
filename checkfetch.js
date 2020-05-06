var fetch = require('node-fetch');
var i = 1;


function walker(i){
  // build url
  // i = ('000'+i).slice(-3);
  var url = 'https://sambergconferencecenter.mit.edu/wp-content/uploads/wppa/' + i  + '.jpg'

  fetch(url).then(function(response) {
    //console.log(response.status); // debugging

    // if found write url to console
    if(response.status === 404){
        console.log('404: not found');
    }
    else{
	console.log(response.status + ': ' + response.url);
    }

    // wait 10 secs then call next image
    setTimeout(function(){
      i++;
      walker(i);
    },10000);

  });
}
walker(i);

