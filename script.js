/* -------------------------------------------------------------------------- */
/*           1 - Given a String,reverse each word  in the sentence?           */
/* -------------------------------------------------------------------------- */
var str = " one day you will be successfull in life";

var savedStrArray = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(savedStrArray.join(" "));

/* -------------------------------------------------------------------------- */
/*              2 - How to check if an object is an array or not?             */
/* -------------------------------------------------------------------------- */

function checkArray(elem) {
  return Array.isArray(elem);
}

console.log(checkArray([]));
console.log(checkArray({}));

/* -------------------------------------------------------------------------- */
/*                  3-  How to empty an array in JavaScript?   
     do not reset it to a new array,and also don't use loop through to pop each value               */
/* -------------------------------------------------------------------------- */

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
arr.length = 0;
console.log(arr);

/* -------------------------------------------------------------------------- */
/*              4-How would you check if a number is an integer?              */
/* -------------------------------------------------------------------------- */

var a = 5;

if (a % 1 === 0) {
  console.log(" this is a integer");
} else {
  console.log("this is not a integer");
}

//also we use Number.isInteger(5)

/* -------------------------------------------------------------------------- */
/*                   5- make this work ,duplicate([1,2,3,4,5]);  //[1,2,3,4,5,1,2,3,4,5]                            */
/* -------------------------------------------------------------------------- */

function duplicate(arr) {
  return arr.concat(arr);
}
var a = [1, 2, 3, 4, 5];
console.log(duplicate(a));

/* -------------------------------------------------------------------------- */
/*                                     6-revere the numbers                                     */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- method 1 --------------------------------- */
function reverse(num) {
  return Number(num.toString().split("").reverse().join(""));
}

var no = 456789;
console.log(reverse(1234));
console.log(reverse(no));

/* ---------------------------------- Method 2 --------------------------------- */

function reverseKaro(num) {
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log("Ans of method-2", reverseKaro(23456));

/* -------------------------------------------------------------------------- */
/*     Q-7 Write a javascript function that check whether a passed string is palindrome or not                  */
/* -------------------------------------------------------------------------- */

function palindromeCheck(str) {
  var reversed = str.split("").reverse().join("");
  if (reversed === str) return true; //or we write returned reversed === str;
  else return false;
}

console.log(palindromeCheck("malyalam"));
console.log(palindromeCheck("poop"));

/* -------------------------------------------------------------------------- */
/*       Q-8 Write a Javascript function that returns a passed string with letters in alphabetical order                                                        */
/* -------------------------------------------------------------------------- */

function arrangeAlphabet(str) {
  var sorted = str.split("").sort().join("");
  return sorted;
}
var words = "congratulations";
console.log(arrangeAlphabet(words));

/* -------------------------------------------------------------------------- */
/*  Q-9 Write a Javascript function that accepts a string as as parameter and convert the 
         the first letter of  each word of the string in upper casd           */
/* -------------------------------------------------------------------------- */

function capitalize(str) {
  var allwords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return allwords.join(" ");
}

var line = "hello this is the function for capitalize first letter ";
console.log(capitalize(line));
console.log(capitalize("second console for direct string"));

/* -------------------------------------------------------------------------- */
/*  Q-10 Write a js funct which accepts an argument and return type 

Note:-There are six possible values that typeof returns:object,boolean,
function,number,string,and undefined*/
/* -------------------------------------------------------------------------- */

function typeTeller(elem) {
  return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller({ name: "ram", age: 17 }));
console.log(typeTeller(12));
console.log(typeTeller("ram"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));

/* -------------------------------------------------------------------------- */
/*  Q-11 Write a Javascript function to get the number of occurences of each letter in specified strings                       */
/* -------------------------------------------------------------------------- */

function occ(str) {
  var occurences = {};
  str.split("").forEach(function (elem) {
    if (occurences.hasOwnProperty(elem) === false) {
      occurences[elem] = 1;
    } else {
      occurences[elem]++;
    }
  });
  return occurences;
}

console.log(occ("ramlaal"));

/* -------------------------------------------------------------------------- */
/*        Q-12         loop an array and all members of it                    */
/* -------------------------------------------------------------------------- */

var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
arr.forEach(function (elem) {
  sum = sum + elem;
});
console.log(sum);

/* -------------------------------------------------------------------------- */
/* Q-13 In an array of numbers and strings,only add those members which are not strings                                     */
/* -------------------------------------------------------------------------- */

var arr = [1, "pal", 26, 3, "ram", 4, 55, "fd", 6, 7];
var sum = 0;
arr.forEach(function (elem) {
  if (typeof elem === "number") {
    sum = sum + elem;
  } else {
  }
});

console.log(sum);

/* -------------------------------------------------------------------------- */
/*   Q-14 loop an array of objects and remove all objects which don't have gender's value male   */
/* -------------------------------------------------------------------------- */

var arr = [
  { name: "pal", gender: "male" },
  { name: "angel", gender: "female" },
  { name: "kuldeep", gender: "male" },
  { name: "rahul", gender: "male" },
  { name: "mohit", gender: "male" },
  { name: "tanya", gender: "female" },
  { name: "honey", gender: "female" },
  { name: "abcd", gender: "unspecified" },
];

/* -------------------------------- method 1 -------------------------------- */
// //male array list  //filter create new array
// var maleArray = arr.filter(function (elem) {
//   return elem.gender === "male";
// });

// //female array list
// var femaleArray = arr.filter(function (elem) {
//   return elem.gender === "female";
// }); b
// console.log(maleArray);
// console.log(femaleArray);

/* -------------------------------- method 2 -------------------------------- */

//sabse pehle total non-male count lo

var count = 0;
arr.forEach(function (elem) {
  if (elem.gender !== "male") count++;
});

//step 2 total non-male par chala do
for (var i = 1; i <= count; i++) {
  // step 1 ek non male bande ko remove  karne ka code likho
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}
console.log(arr);

/* -------------------------------------------------------------------------- */
/*   Q-15 write a js function to clone an array                   */
/* -------------------------------------------------------------------------- */

function cloneArr(arr) {
  var newarr = arr.map(function (e) {
    return e;
  });
  return newarr;
}

var newarr = cloneArr([1, 2, 3, 4]);

/* -------------------------------------------------------------------------- */
/*   Q-16   write a js function to get the first element of an array .passing a parameter
    'n' will return the first 'n' elements of the array.                                   */
/* -------------------------------------------------------------------------- */

function retrieve(arr,n=1){

     if(n<=arr.length){
      for(var i=0; i<n; i++){
        console.log("data",arr[i])
      }
     }else{
      console.log(n +"itne to element nhi h")
     }

}
retrieve([1,2,3,4,5],2)   // outpit:- first two element

/* -------------------------------------------------------------------------- */
/*  Q-17   write a js function to get the last element of an array .passing a parameter
    'n' will return the last 'n' elements of the array.                        */
/* -------------------------------------------------------------------------- */

function retriever(arr,n=1){

  if(n<=arr.length){
   for(var i=0; i<n; i++){
     console.log(arr[arr.length -1 - i])
   }
  }else{
   console.log(n +"itne to element nhi h")
  }

}
retriever([1,2,3,4,5],2)   // output:- last 2 element 5 ,4
retriever([1,2,3,4,5],2)   //output:-itne to element hi nahi h


/* -------------------------------------------------------------------------- */
/*  Q18 Write a Javascript program to find the most frequent item of an array  */
/* -------------------------------------------------------------------------- */

function freq(arr){
        var freq={};
        arr.forEach(function(elem){
          if (freq.hasOwnProperty(elem)) freq[elem]++;
          else freq[elem]=1;
      })
       console.log(freq);
      var ans =Object.keys(freq).reduce(function(acc,next){
        return freq[acc] > freq[next] ? acc:next;
      })

      console.log("most repeat no:",ans);
}

freq([5,1,7,5,47,8,45,4,859,3,5,5,7,57,1,5,4,2,4,45,,8])





/* -------------------------------------------------------------------------- */
/*             Q-19 Write a Javascript program to shuffle an array            */
/* -------------------------------------------------------------------------- */

function shuffle(arr){
//sabse pehle length nikalenge array ki
 var totalsShuffledArea =arr.length;
 // random number
 
 while(totalsShuffledArea >0){
       totalsShuffledArea--;
       var indexToBeExchanged=Math.floor(Math.random()* totalsShuffledArea)
       var temp =arr[totalsShuffledArea]
       arr[totalsShuffledArea]=arr[indexToBeExchanged]
       arr[indexToBeExchanged]=temp;
 }
 return arr;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9  ])); 



/* -------------------------------------------------------------------------- */
/*         Q-20 Write a Js program to compute the union of two arrays      
         Sample data:
         console.log(union(1,2,3),[100,2,1,10]));
         [1,2,3,10,100]   */
/* -------------------------------------------------------------------------- */

function union(arr1,arr2){
  return  [...new Set(arr1.concat(arr2))];
}
console.log("union of two array:-",union([1,2,3,4,5],[2,4,5,7,7,7,8,7]))