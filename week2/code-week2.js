
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}


var n = 4;
var fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(n + "!", "=", fact);

for (let i = 0; i <= n; i++) {
  if (i === 0) {
    console.log("0 1"); // เพราะ 0! = 1
  } else {
    let fact = 1;
    for (let j = 1; j <= i; j++) {
      fact *= j;
    }
    console.log(i, fact); 
  }
}

var n = -1; // เปลี่ยนค่า n เพื่อทดสอบ
if (!Number.isInteger(n) || n < 0) {
    console.log("ERROR");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 1. write a script to print the factorial of 1 to n.
// print "ERROR" if n is not an integer or n is less than 0;
// print 0 1 if n is 0 (because 0! = 1)
// e.g.,1 12 2 3 6 4 24 ... n n!

var n = 6;
// loop to print i and i! until i==n

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


var n = 5; // เปลี่ยนค่า n เพื่อทดสอบ
if (n % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}

for (var i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i, "is divisible by 3");
    }
}

console.log(true && 3);
console.log(3 && true);
console.log(true && true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let word = "Hi";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var sum = 0;
for (var i = 1; i < 100; i++) {
    sum += i; // sum = sum + i
}
console.log("Sum of 1 to", i, "is", sum);
    
var a = "Hello";
var count = 0;
while ((count) < (a.length)) {
    count++;
} console.log(("string is"),count);

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}

for (var i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i, "is divisible by 3");
    }
}
var x = "Hello"
var y = 0
while (y < x.length) {
    if (x[y] === "a" || x[y] === "e" || x[y] === "i" || x[y] === "o" || x[y] === "u") {
        console.log(x[y], "is a vowel");
    }
    y++;
}