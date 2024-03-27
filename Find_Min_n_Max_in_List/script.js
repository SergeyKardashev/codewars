// Find Maximum and Minimum Values of a List
// 
// Your task is to make two functions (max and min) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.
// 
// Examples(Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// 
// Notes
// You may consider that there will not be any empty arrays/vectors.
//
//

// In case I have to return the number, not the index
// var min = function(list){
//   let min = list[0];
//   for (let i = 0; i <= list.length - 1; i++) {
//     if (list[i] < min) {
//       min = list[i];
//      }
//   }
//   return min;
// }

// Return by index
var min = function(list){
  let minIndex = 0;

  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] < list[minIndex]) {
      minIndex = i;
     }
  }

  return list[minIndex];
}

var max = function (list) {
  let maxIndex = 0;

  for (i = 0; i <= list.length - 1; i++) {
    if (list[i] > list[maxIndex]) {
      maxIndex = i;
    }
  }
  
  return list[maxIndex];
}