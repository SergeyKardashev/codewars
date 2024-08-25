// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('abc'));


function reverseString(str) {
  return [...str].reverse().join('');
}

console.log(reverseString('hello'));

module.exports = solution;