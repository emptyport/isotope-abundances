var fs = require('fs');
var filename = 'NIST_DATA.dat';

var all_isotopes = [];

fs.readFile(filename, 'utf8', function(err, data){
  if (err) throw err;
  var lines = data.split(/\r?\n/);
  var currentIsotope = {}
  lines.forEach(function(line){
    if (line === '') { 
      all_isotopes.push(currentIsotope);
      currentIsotope = {};
      return;
    }
    var key = line.split('=')[0].trim();
    var val = line.split('=')[1].trim();
    currentIsotope[key] = val;
  });
  // console.log(all_isotopes);
  real_isotopes = [];
  all_isotopes.forEach(function(isotope){
    var symbol = isotope['Atomic Symbol'];
    var mass = isotope['Relative Atomic Mass'];
    var abundance = isotope['Isotopic Composition'];
    if (abundance === '') return;
    if (!(symbol in real_isotopes)){
      real_isotopes[symbol] = [];
    }
    real_isotopes[symbol].push([mass, abundance]);
  });

  console.log(real_isotopes);

});