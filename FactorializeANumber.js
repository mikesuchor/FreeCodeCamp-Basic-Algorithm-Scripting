/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  var factor = 1;
  for (var i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}

console.log(factorialize(5));
