// Fast cooking pancakes
// You need to cook pancakes, but you are very hungry.
// As known, one needs to fry a pancake one minute on each side.
//
// What is the minimum time you need to cook n pancakes,
// if you can put on the frying pan only m pancakes at a time ?
//
// n and m are positive integers between 1 and 1000.

// function cookPancakes(cakes, slots) {
//   if (cakes <= slots) {
//     console.log("cakes < or = slots", "cakes", cakes, "slots", slots, "res 2");
//     return 2;
//   }
  
//   // 3 cakes and 2 slots result 3, 4 cakes and 3 slots result 3
//   // There is the quotient of integer division in the last line return (Math.floor)
//   // 8 cakes = 16 sides
//   if ((cakes * 2) % slots !== 0) {
//     let res = Math.floor(cakes / slots * 2) + 1;
//     console.log("% != 0", "cakes", cakes, "slots", slots, "res", res);
//     return res;
//   } 

//   return cakes / slots * 2;
// }

function cookPancakes(cakes, slots) {
    return cakes < slots ? 2 : Math.ceil(cakes / slots * 2);
  }

module.exports = cookPancakes;