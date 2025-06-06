/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray) {
  let numberList = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 == 0) {
      numberList.push(numbersArray[i]);
    }
  }
  return numberList;
}

getEvenNumbers([1, 2, 3, 6, 8, 10]);
