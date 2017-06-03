# isotope-abundances
A simple library to provide isotope abundances with JavaScript

## Installation
npm install isotope-abundances --save

## Usage
``` javascript
var isoAbund = require('isotope-abundances');
console.log(isoAbund('H'));
```
Output:
```
[ [ '1.00782503223', '0.999885' ],
  [ '2.01410177812', '0.000115' ] ]
```
The output for each isotope is an array of arrays where the first value is the mass value and the second value is the relative abundance of that isotope.

## Tests
You can run `npm test` to run the tests after installing the development dependencies.

## Data
The isotope data for this package comes from [NIST](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-column-descriptions) and was retrieved on June 1st, 2017. The "Linearized ASCII Output" for all elements and all isotopes can be found in `NIST_DATA.dat`. The script `generate_json.js` can be used to regenerate the `ISOTOPES.json` file which contains the isotopic distribution data. The development dependencies must be installed before running `generate_json.js`.

## License
This software is released under the MIT license
