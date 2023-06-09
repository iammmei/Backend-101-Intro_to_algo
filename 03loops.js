//I.PrintNumbers

//Numbers from 1 to n
let a = 3;
for (let i = 0; i < a; i++) {
  console.log(i);
}

//Numbers from 1 to n in descending order

let b = 10;
for (let i = 1; i > -5; i--) {
  console.log(i);
}

//Numbers from -n to n

let c = 3;
for (let i = -5; i < c; i++) {
  console.log(i);
}

// Odd numbers.
let d = 10;

for (let i = 1; i <= d; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let z = 10;

for (let i = 1; i < z; i += 2) {
  console.log(i);
}

//II.PrintRandomNumberOfIntegers

function printNumbersUpToRandom() {
  var randomInteger = Math.floor(Math.random() * 10) + 1;
  console.log("Random Integer: " + randomInteger);

  for (var i = 0; i <= randomInteger; i++) {
    console.log(i);
  }
}

printNumbersUpToRandom();

//III - throw dices

function countDiceOccurrences(numThrows, targetNumber) {
  var count = 0;

  for (var i = 0; i < numThrows; i++) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    if (diceNumber === targetNumber) {
      count++;
    }
  }

  return count;
}

//IV - even numbers

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

//V - perfect number

function isPerfectNumber(number) {
  if (number <= 0) {
    return false;
  }

  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}
