// Convert number to reversed array of digits.
// Given a random non - negative number,
// you have to return the digits of this number within an array in reverse order.
// 35231 => [1,3,2,5,3]
// 0 => [0]
//
//
//
function digitize_12(n) {
  return Array.from(String(n), (i) => parseInt(i)).reverse();
}

console.log("digitize_12", digitize_12(1234));
//
//
//
function digitize_11(n) {
  return Array.from(String(n))
    .map((i) => parseInt(i))
    .reverse();
}

console.log("digitize_11", digitize_11(1234));
//
//
//
// map is chained
function digitize_10(n) {
  return Array.from(String(n)).map(Number).reverse();
}
console.log("digitize_101", digitize_10(1234));
//
//
//
// map is inside of Array.from()
function digitize_09_long(n) {
  const str = String(n);
  const arr = Array.from(str, (letter) => {
    return Number(letter);
  });

  return arr.reverse();
}
console.log("digitize_09", digitize_09(1234));
//
//
//
// map is inside of Array.from()
function digitize_09_short(n) {
  return Array.from(String(n), Number).reverse();
}

console.log("digitize_09_short", digitize_09_short(1234));
//
//
//
function digitize_08_short(n) {
  return String(n).split("").map(Number).reverse();
}

console.log("digitize_08_short", digitize_08_short(1234));
//
//
//
function digitize_08_long(n) {
  const str = String(n);
  const arrOfStrings = str.split("");
  const arrOfNum = arrOfStrings.map((symbol) => {
    return Number(symbol);
  });
  const reversedNumArr = arrOfNum.reverse();

  return reversedNumArr;
}

console.log("digitize_08_long", digitize_08_long(1234));
//
//
//
function digitize_07(n) {
  const string = String(n);
  let arr = [];

  for (let i = string.length - 1; i >= 0; i--) {
    const num = +string[i]; // let num = Number(string[i]);
    arr.push(num);
  }

  return arr;
}

console.log("digitize_07", digitize_07(1234));
//
//
//
function digitize_06(n) {
  if (n < 10) {
    return [n];
  }

  const str = String(n);
  let arr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    const digit = Number(char);
    arr.push(digit);
  }
  arr.reverse();

  return arr;
}

console.log("digitize_06 +0", digitize_06(+0));
console.log("digitize_06 1234", digitize_06(1234));

//
//
//
function digitize_05(n) {
  const myString = String(n);
  let myArray = [];
  for (let i = 0; i <= myString.length - 1; i++) {
    myArray.unshift(Number(myString[i]));
  }

  return myArray;
}

console.log("digitize_05", digitize_05(1234));
//
//
// Сократил, убрав {} – в теле не блок инструкций, а 1 инст-я
function digitize_04(n) {
  let arr = [];
  for (let char of String(n)) arr.push(Number(char));

  return arr.reverse();
}
console.log("digitize_04", digitize_04(1234));
//
//
//
function digitize_03(n) {
  let arr = [];
  for (let char of String(n)) {
    arr.push(Number(char));
  }
  return arr.reverse();
}
console.log("digitize_03", digitize_03(1234));
//
//
//
function digitize_02(n) {
  let arr = [];
  const str = String(n);
  for (let char of str) {
    const digit = Number(char);
    arr.push(digit);
  }
  let reversedArr = arr.reverse();
  return reversedArr;
}
console.log("digitize_02", digitize_02(1234));
//
//
//
function digitize_01(n) {
  const str = String(n);
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    let symbol = str.at(i);
    let num = Number(symbol);
    arr.push(num);
  }
  return arr;
}

console.log("digitize_01", digitize_01(12345));
