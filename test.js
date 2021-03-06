let threeSum = n => {};
let isCircular = () => {};
let largestContinuousSum = () => {};
let findStart = () => {};
let maxProfit = () => {};
let findRepeat = () => {};

//  KEVIN'S SOLUTIONS BELOW, DO NOT READ BEFORE ATTEMPTING PLEASE!
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const threeSum = (arr, target) => {
//    const results = [];
//    arr.sort((a, b) => a - b);
//    for (let i = 0; i < arr.length - 2; i++) {
//       let left = i + 1;
//       let right = arr.length - 1;
//       while (left < right) {
//          const sum = arr[left] + arr[i] + arr[right];
//          if (sum === target) {
//             results.push([arr[i], arr[left], arr[right]]);
//             left++;
//             right--;
//          } else if (sum < target) {
//             left++;
//          } else {
//             right--;
//          }
//       }
//    }
//    return results;
// };
// const isCircular = node => {
//    if (node === null || node.next === null) return false;
//    let currentNode = node;
//    let endNode = node.next;
//    while (currentNode !== endNode) {
//       if (endNode === null || endNode.next === null) return false;
//       currentNode = currentNode.next;
//       endNode = endNode.next.next;
//    }
//    return true;
// };
// const largestContinuousSum = arr => {
//    let currentSum = arr[0];
//    let currentMax = arr[0];
//    for (let i = 1; i < arr.length; i++) {
//       const currentNum = arr[i];
//       currentSum = Math.max(currentNum, currentNum + currentSum);
//       currentMax = Math.max(currentSum, currentMax);
//    }
//    return currentMax;
// };
// function findStart(words) {
//    let currentRight = words.length - 1;
//    let currentLeft = 0;
//    let currentMiddleIdx = Math.floor(words.length / 2);
//    while (currentRight !== currentLeft) {
//       if (
//          words[currentLeft] < words[currentMiddleIdx] &&
//          words[currentLeft] < words[currentRight]
//       ) {
//          currentRight = currentMiddleIdx;
//       } else if (
//          words[currentRight] < words[currentMiddleIdx] &&
//          words[currentRight] < words[currentLeft]
//       ) {
//          currentLeft = currentMiddleIdx;
//       } else {
//          return currentMiddleIdx;
//       }
//       currentMiddleIdx =
//          currentRight - Math.floor((currentRight - currentLeft) / 2);
//    }
//    return currentMiddleIdx;
// }
// function maxProfit(stockPrices) {

//    // Calculate the max profit
//    if(stockPrices.length <= 1) throw new Error('Stock prices is empty or has only one price');
//    let maxProfit = -Infinity;
//    let minPrice = stockPrices[0];
//    for(let i = 1; i<stockPrices.length; i++){
//      let currentStockPrice = stockPrices[i];
//      let currentDifference = currentStockPrice - minPrice;
//      maxProfit = Math.max(currentDifference, maxProfit);
//      minPrice = Math.min(minPrice,currentStockPrice);
//    }

//    return maxProfit;
//  }
// Solution - From interview cake;
// function findRepeat(numbers) {

//    let floor = 1;
//    let ceiling = numbers.length - 1;

//    while (floor < ceiling) {

//      // Divide our range 1..n into an upper range and lower range
//      // (such that they don't overlap)
//      // lower range is floor..midpoint
//      // upper range is midpoint+1..ceiling
//      const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
//      const lowerRangeFloor = floor;
//      const lowerRangeCeiling = midpoint;
//      const upperRangeFloor = midpoint + 1;
//      const upperRangeCeiling = ceiling;

//      const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

//      // Count number of items in lower range
//      let itemsInLowerRange = 0;
//      numbers.forEach(item => {

//        // Is it in the lower range?
//        if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
//          itemsInLowerRange += 1;
//        }
//      });

//      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

//        // There must be a duplicate in the lower range
//        // so use the same approach iteratively on that range
//        floor = lowerRangeFloor;
//        ceiling = lowerRangeCeiling;
//      } else {

//        // There must be a duplicate in the upper range
//        // so use the same approach iteratively on that range
//        floor = upperRangeFloor;
//        ceiling = upperRangeCeiling;
//      }
//    }

//    // Floor and ceiling have converged
//    // We found a number that repeats!
//    return floor;
//  }

module.exports = {
   threeSum,
   isCircular,
   largestContinuousSum,
   findStart,
   maxProfit,
   findRepeat,
};
