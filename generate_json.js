// Michael Porter 2017
// This script will read in the isotopic data
// as it comes from NIST and format it in JSON

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

  real_isotopes = {};

  all_isotopes.forEach(function(isotope){
    var symbol = isotope['Atomic Symbol'];
    var mass = isotope['Relative Atomic Mass'].replace(/\(\d{0,}\)/, '');
    var abundance = isotope['Isotopic Composition'].replace(/\(\d{0,}\)/, '');

    if (abundance === '') return;

    if (!(symbol in real_isotopes)){
      real_isotopes[symbol] = [];
    }

    real_isotopes[symbol].push([mass, abundance]);

    if (symbol === 'D') real_isotopes['H'].push([mass, abundance]);
  });

  fs.writeFile('./ISOTOPES.json', JSON.stringify(real_isotopes, null, 2), function(err){
    if (err) throw err;
  });
});