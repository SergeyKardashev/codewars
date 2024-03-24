// Square(n)Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//
// iterating through the array using the forEach method,
// storing the value in a variable in the scope of the function
function squareSum_01(numbers) {
  let result = 0;
  numbers.forEach((i) => {
    result = result + i * i;
  });

  return result;
}

console.log("squareSum_01", squareSum_01([1, 2, 2]));
//
//
// the same with +=
function squareSum_02(numbers) {
  let result = 0;
  numbers.forEach((i) => {
    result += i * i;
  });

  return result;
}
//
//
//
function squareSum_03(numbers) {
  return numbers.reduce((acc, num) => acc + num * num, 0);
}

console.log("squareSum_03", squareSum_03([1, 2, 2]));
