function getArrayParams(...arr) {
  if (arr.length > 0) {
    let sum = arr.reduce((prev, currentValue) => {
      return prev + currentValue;
    });
    let avg = parseFloat((sum / arr.length).toFixed(2));

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return { min: min, max: max, avg: avg };
  } else {
    return 0;
  }

}

function summElementsWorker(...arr) {
  if (arr.length > 0) {
    let sum = arr.reduce((prev, currentValue) => {
      return prev + currentValue;
    });
    return sum;
  } else {
    return 0;
  }

}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEven = 0;
    let sumOdd = 0;
    arr.forEach(item => {
      if (item % 2 === 0) {
        sumEven += item;
      } else {
        sumOdd += item;
      };
    });
    return sumEven - sumOdd;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
    let sumEven = 0;
    let countEven = 0;
    arr.forEach(item => {
      if (item % 2 === 0) {
        sumEven += item;
        countEven += 1;
      };
    });
    return sumEven / countEven;
  } else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  arrOfArr.forEach((arr) => {
    result = func(...arr);
    if (max < result) {
      max = result;
    }
  });
  return max;
}


const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
