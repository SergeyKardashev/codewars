function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((acc, current) => acc + current, yourPoints);
  const studentsInClass = classPoints.length + 1;
  const average = sum / studentsInClass;

  return yourPoints > average;
}

console.log(betterThanAverage([2, 3], 5));

module.exports = { betterThanAverage };