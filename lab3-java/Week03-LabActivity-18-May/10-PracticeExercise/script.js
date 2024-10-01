// ## 01.
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

// --------------------------
// # 02.For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

// # 03.Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

// a.	Remove the first company from the array

// b.	Remove Uber & Add Ola in its place

// c.	Add Amazon at the end

// # Challenge One
// Array of numbers
const arrList = [85, 97, 44, 37, 76, 60];
let arrSum = 0; // Initialize
// Loop through each item in arrList and add it to arrSum
for (let i = 0; i < arrList.length; i++) {
  arrSum += arrList[i];
}

// Calculate the average
const arrAvg = arrSum / arrList.length;

console.log(arrSum);
console.log(arrAvg);

// # Challenge Two
// Array of item prices
const arrItem = [250, 645, 300, 900, 50];
let arrFinal = [];

for (let i = 0; i < arrItem.length; i++) {
  const arrDiscount = arrItem[i] - (10 / 100) * arrItem[i]; // Calculate the discount
  arrFinal.push(arrDiscount); // Add the discounted price to the new array
}
// Output the array with discout price
console.log(arrFinal);

// # Challenge Three
let arrayCom = ["Bloomberg", "Microsoft", "uber", "google", "IBM", "Netflix"]; // List of company names

// Remove the first item from the array
arrayCom.shift();

// Finding the index of the company "uber" and replacing it with "Ola"
let index = arrayCom.indexOf("uber");
arrayCom[index] = "Ola";

// Adding "Amazon" to the end of the array
arrayCom.push("Amazon");
// Output
console.log(arrayCom);
