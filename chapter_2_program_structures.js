// Looping a triangle
for (let star = '#'; star.length < 8; star += '#') {
    console.log(star);
}

// FizzBuzz challenge
for (let number = 1; number <= 100; number ++) {
    let output = "";
    if (number % 3 == 0) {
        output += "Fizz";
    } else if (number % 5 == 0){
        output += "Buzz";
    }
    console.log(output || number);
}

// Chessboard challenge

