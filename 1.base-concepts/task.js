"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - 4 * a * c;
  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    arr.push(x1);
    arr.push(x2);
  }
  console.log(arr);
  return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let initialDebt = amount - contribution;
  let monthlyPercent = (percent / 100) / 12;

  let monthlyPayment = initialDebt * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalDebt = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalDebt;
}

solveEquation(1, 5, 4);
calculateTotalMortgage(10, 0, 50000, 12);