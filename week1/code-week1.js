///////////////////////////// if / else if / else
let age = 28;
if (age >= 18) {
    console.log("You are an adult.");
}

///////////////////////// switch
let day = "Mon";
switch (day) {
    case "Monday":
        console.log("Mon");
     break;
    case "Tuesday":
        console.log("Tue");
     break
    default:
        console.log("Not a valid day");
    }  

let result  = (score >= 50) ? "Pass" : "Fail"; // = () ? : ;
console.log(result);

if (score >= 50) {
    result = "Pass";
} else {
    result = "Fail";
}

//  เกมฝึก + แบบฝึกแนวข้อสอบจริง สำหรับหัวข้อ Conditional Statement 🧠🔥
var x = 10;
if (x < 5) {
    console.log("Low");
} // Output: Low

var y = "Hello";
if (typeof y === "number") {
    console.log("Number");
} else {
    console.log("Not a number");
} // Output: Not a number

var score = 85;
if (score >= 0 && score <= 100) {
    if  (score >= 90) console.log("A+");
    else if (score >= 80) console.log("A");
    else console.log("Other");
} else {
    console.log("Invalid score");
} // Output: A
