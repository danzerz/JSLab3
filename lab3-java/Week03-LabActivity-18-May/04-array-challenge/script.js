const arr = [1, 2, 3, 4, 5];
// **Expected Result:**
// challenge 1
revArr = arr.reverse();
console.log(revArr);
console.log(arr);
revArr.push(0);
revArr.unshift(6);
console.log(revArr);
// [6, 5, 4, 3, 2, 1, 0];

// challenge - 2
// using set
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// console.log(...arr1);
const arr3 = [...arr1, ...arr2];

const setArr = new Set(arr3);
console.log(setArr);
const Arr4 = Array.from(setArr);
console.log(Arr4);

// using splice

let removeIndex = arr3.indexOf(5, arr3.indexOf(5) + 1);
console.log(removeIndex);

if (removeIndex !== -1) {
  arr3.splice(removeIndex, 1);
}
console.log(arr3);
