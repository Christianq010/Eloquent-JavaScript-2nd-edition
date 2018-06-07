// ------------------------------------
// Some important things to remember
// ------------------------------------

// Strings and their properties --------------

// Slice and IndexOf
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5”

// Trim (removes whitespace)
console.log("  okay \n ".trim());
// → okay”


// joining and spliting
// You can split a string on every occurrence of another string with split, 
// and join it together again with join.

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping”

// repeat
console.log("LA".repeat(3));
// → LALALA

// length checking on strings
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b”

// REST PARAMETER
let numbers = [5, 1, 7];
console.log(Math.max(...numbers));

// In - arrays

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]”


//  The sum of a range function
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }
  
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55