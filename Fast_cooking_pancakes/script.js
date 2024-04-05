// Fast cooking pancakes
// You need to cook pancakes, but you are very hungry. 
// As known, one needs to fry a pancake one minute on each side.
// 
// What is the minimum time you need to cook n pancakes, 
// if you can put on the frying pan only m pancakes at a time ?
// 
// n and m are positive integers between 1 and 1000.
//
//
//
// function cookPancakes(n, m) {
//    some code
// }

function cookPancakes(cakes, ovenSize) {
  console.log(cakes, ovenSize);
  if (cakes <= ovenSize) {
    return 2;
  }
  if (cakes % ovenSize === 0) {
    return cakes / ovenSize * 2;
  }
  return (Math.floor(cakes / ovenSize) + 1) * 2 - 1;
}

console.log(cookPancakes(1, 2));
console.log(cookPancakes(2, 2));
console.log(cookPancakes(3, 2));
console.log(cookPancakes(617, 411));
console.log(cookPancakes(222, 65));

// console.log(cookPancakes(8, 3));
// There is the quotient of integer division in the last line return (Math.floor)
// 8 cakes = 16 sides
// 