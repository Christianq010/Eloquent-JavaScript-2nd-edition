// Minimum Excercise
/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can do that ourselves now. 
Write a function min that takes two arguments and returns their minimum.
*/

var min = function(a, b) {
    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    }
};

// min(245, 32);

// Bean Counting
/* 

*/
function countChar(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == ch)
        counted += 1;
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4