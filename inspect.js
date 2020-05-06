var shell = require('shelljs');

shell.exec('urlcheck "http://www.mit.edu"', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
