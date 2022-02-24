/* 
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier.
Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.
*/

const calculateChange = function(total, cash) {
  let changeBack = cash - total; 

  let Twenty = 2000
  let Ten = 1000
  let Five =   500
  let Two = 200
  let One = 100
  let Quarter = 25 
  let Dime = 10
  let Nickel = 5
  let Penny = 1;

  return changeBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
