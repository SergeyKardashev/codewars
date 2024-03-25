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
// the same with short increment +=
function squareSum_02(numbers) {
  let result = 0;
  numbers.forEach((i) => {
    result += i * i;
  });

  return result;
}
//
//
// reduce()
function squareSum_03(numbers) {
  return numbers.reduce((acc, num) => acc + num * num, 0);
}

console.log("squareSum_03", squareSum_03([1, 2, 2]));

// pay attention to initial value
// console.log(
//   "reduce, WITHOUT initial value, [10, 5]",
//   [10, 5].reduce((acc, num) => acc + num * num)
// );

// console.log(
//   "reduce, initial value is 0, [10, 5]",
//   [10, 5].reduce((acc, num) => acc + num * num, 0)
// );
//
//
//
// reduce() with short increment += and with **2
function squareSum_04(numbers) {
  return numbers.reduce((acc, num) => (acc += num ** 2), 0);
}

console.log("squareSum_04", squareSum_04([1, 2, 2]));
//
//
//
// for(let ... of ...)
function squareSum_05(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i ** 2;
  }

  return sum;
}

console.log("squareSum_05", squareSum_05([1, 2, 2]));
//
//
//
// reduce() with Math.pow
function squareSum_06(numbers) {
  return numbers.reduce((acc, num) => (acc += Math.pow(num, 2)), 0);
}

console.log("squareSum_06", squareSum_06([1, 2, 2]));
