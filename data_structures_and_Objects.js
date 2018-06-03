// ------------------------------------
// Some important things to remember
// ------------------------------------

// 

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