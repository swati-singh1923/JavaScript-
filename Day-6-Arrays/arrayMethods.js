/*Task 1:Use the push method to add a new number to the end of the array and log the updated array.*/

let arr = [1,2,3,4,5,6,7];
console.log("Array is:",arr);   //1,2,3,4,5,6,7
arr.push(8);
console.log(`Updated array is: ${arr}`);  //1,2,3,4,5,6,7,8

/*Task 2:Use the pop method to remove a number to the end of the array and log the updated array.*/

let newArr = [1,2,3,4,5,6,7,8,9];
console.log(`Array is: ${newArr}`);  //1,2,3,4,5,6,7,8,9
newArr.pop();
console.log(`Updated Array is: ${newArr}`);  //1,2,3,4,5,6,7,8

/*Task 3:Use the shift method to remove the first element from the array and log the updated array.*/

let num = [1,2,3,4,5,6,7];
console.log(`Array is: ${num}`);   //1,2,3,4,5,6,7
num.shift();
console.log(`Updated array is: ${num}`);   //2,3,4,5,6,7

/*Task 4:Use the unshift method to add a new number to the begining of the array and log the updated array.*/

let newNum = [1,2,3,4,5,6,7,8];
console.log(`Array is: ${newNum}`);   //1,2,3,4,5,6,7,8
newNum.unshift(0);
console.log(`Updated array is: ${newNum}`);   //0,1,2,3,4,5,6,7,8

/*Task 5:For given start state of an array changes it to final form using methods.
start:['january','july','march','august']
fianl:['july','june','march','august']*/

let months = ['january', 'july', 'march', 'august'];
console.log(`Start array is: ${months}`);
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(`Final array is: ${months}`);

//months[0] = "july";
//months[1] = "june";

//Array indexof() method: return index of element.

let primary = ["red", "yellow", "blue"];
console.log(primary);
console.log(primary.indexOf("yellow"));  // 1
console.log(primary.indexOf("Yellow"));  //-1 (not found)

//Array includes(): search for a values.

let value = primary.includes("green");
console.log(value);          //false (not found)

let nextValue = primary.includes("red");
console.log(nextValue);    //true

//concat() method: merge two arrays.

let secondary = ["orange", "green", "voilet", "red"];
concat = primary.concat(secondary);
console.log(concat);

//concat method does not change the original array.

//reverse() method: reverse an array.

rev = secondary.reverse();
console.log(rev);  
console.log(secondary); //['red', 'voilet', 'green', 'orange']

//reverse method make chenges in original array.

//slice() method: copies a portion of an array.

let fruits = ["banana", "orange", "apple", "mango", "papaya", "lichi"];
console.log(fruits.slice());
console.log(fruits.slice(3));
console.log(fruits.slice(3,5));