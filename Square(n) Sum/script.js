// codewars_02_Square(n)Sum

// Решение 1 - перебор форычом с отправкой в переменную
function squareSum(numbers) {
    let result = 0;
    numbers.forEach((i) => { result = result + i * i });

    return result;
}

console.log(squareSum([1, 2, 2]));
