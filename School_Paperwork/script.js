// Beginner Series #1 School Paperwork
//
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//
//
const [a, b] = [0, -1];
const c = 1,
  d = 2;
//
//
//
function paperwork_01(n, m) {
  if (n <= 0 || m <= 0) return 0;

  return n * m;
}

console.log(`paperwork_01, ${a},${b}`, paperwork_01(a, b));
console.log(`paperwork_01, ${b},${a}`, paperwork_01(b, a));
console.log(`paperwork_01, ${a},${a}`, paperwork_01(a, a));
console.log(`paperwork_01, ${c},${c}`, paperwork_01(c, c));
console.log(`paperwork_01, ${d},${c}`, paperwork_01(d, c));
//
//
//
function paperwork_02(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

console.log(`paperwork_02, ${a},${b}`, paperwork_02(a, b));
console.log(`paperwork_02, ${b},${a}`, paperwork_02(b, a));
console.log(`paperwork_02, ${a},${a}`, paperwork_02(a, a));
console.log(`paperwork_02, ${c},${c}`, paperwork_02(c, c));
console.log(`paperwork_01, ${d},${c}`, paperwork_01(d, c));
//
//
//
function paperwork_03(n, m) {
  return n * m * Number(n > 0 && m > 0);
}

console.log(`paperwork_03, ${a},${b}`, paperwork_03(a, b));
console.log(`paperwork_03, ${b},${a}`, paperwork_03(b, a));
console.log(`paperwork_03, ${a},${a}`, paperwork_03(a, a));
console.log(`paperwork_03, ${c},${c}`, paperwork_03(c, c));
console.log(`paperwork_03, ${d},${c}`, paperwork_03(d, c));
