// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.

const isDogBetter = true;
const isCatBetter = false;

// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);
// only one expression evaluates to true, not both expressions as is needed for AND, so the overall is false

// - b) isDogBetter OR isCatBetter.

console.log(isDogBetter || isCatBetter);
// one of both variable evaluates to true, so the overall is true, as OR only needs one expression to be true

// - c) NOT (isDogBetter AND isCatBetter).

console.log(!(isDogBetter && isCatBetter));
// with AND both expressions evaluate to false, but with the NOT operator in front that is equaled (inequaled?) to true

// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.

const atoms = 10;
const sandGrains = 20;
const starsInSky = 30;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.

console.log((atoms > starsInSky) && (atoms > sandGrains));
// both expressions evaluate to false, so overall is false

// - b) `atoms` is NOT equal to `sandGrains`.

console.log(atoms !== sandGrains);
// NOT operator used to check if expressions are inequal, so evaluated to false

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.

console.log((starsInSky < sandGrains) || (starsInSky > atoms));
// second arithmetic expression evaluates to true, so overall evaluates to true

// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.

console.log((atoms === starsInSky) || (atoms !== sandGrains));
// second expressions checks if unequal with evaluates to true, so overall evalates to true

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.

console.log((atoms >= 10) && (sandGrains <= 10));
// only first arithmetic expression evaluates to true, so overall evaluates to false

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.

console.log(((atoms * starsInSky) < 100) || (atoms * sandGrains) > 100); 
// second arithmetic expression evaluates to true, so overall evaluates to true as well

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.


