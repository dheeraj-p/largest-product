const calculateLargestProduct = function (number, numberOfAdjacentDigits){
  let digits = number.split("");
  let largestProduct = 0;
  let threshold  = digits.length - numberOfAdjacentDigits + 1;
  for(let digitCount = 0; digitCount < threshold; digitCount++){
    let currentProduct = 1;
    for(let index = digitCount; index < digitCount + numberOfAdjacentDigits; index++){
      currentProduct = currentProduct * digits[index];
    }
      largestProduct = Math.max(currentProduct,largestProduct);
  }
  return largestProduct;
}

exports.calculateLargestProduct = calculateLargestProduct;

