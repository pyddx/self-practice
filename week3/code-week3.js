// 1. หาผลรวมเลขใน array เฉพาะตัวเลขจริงๆ
function sumOnly(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && isFinite(arr[i])) { // เช็คว่าเป็น number และไม่ใช่ Infinity
            total += arr[i];
        }
    }
    return total; // คืนค่าผลรวม
}
console.log(sumOnly([3, 5, 7, 9])); // 24
console.log(sumOnly([10, "20", null, 30])); // 40

// 2. แปลงคำเป็นตัวพิมพ์ใหญ่ แต่เปลี่ยน O เป็น o
function upperO(words) { 
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let w = words[i].toUpperCase();
        w = w.replace(/O/g, "o");
        result.push(w); // เพิ่มคำที่แปลงแล้วเข้าไปใน array
    }
    return result;
}
console.log(upperO(["moon", "school", "loop"])); // ['mOOn','schOol','lOOp'] 

// 3. หานักเรียนที่อายุน้อยที่สุด
let students = [
    { name: "Tom", age: 21 },
    { name: "Jerry", age: 18 },
    { name: "Mia", age: 22 },
    { name: "Nina", age: 16 }
]; // array ของ object

function findYoungest(students) { // รับ array ของ object
    let youngest = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].age < youngest.age) {
            youngest = students[i];
        }
    }
    return youngest;
}
console.log(findYoungest(students)); // {name: 'Nina', age: 16}

// 4. เช็คว่า array มีเลขที่ต้องการหรือไม่
function hasNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) { 
        if (typeof arr[i] === "number" && arr[i] === target) { 
            return true;// เจอแล้ว
        }
    }
    return false; // ถ้าไม่เจอเลย
}
console.log(hasNumber([2,4,6,8], 6)); // true
console.log(hasNumber([2,4,6,8], 5)); // false
console.log(hasNumber([2,"6",null,8], 6)); // false

// 5. หาค่าเฉลี่ยเฉพาะตัวเลข
function meanNumber(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) { // วนลูปเช็คทุกตัว
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }
    return count === 0 ? 0 : sum / count; // ป้องกันหารด้วยศูนย์
}
console.log(meanNumber([5,10,15,"20",null])); // 10
console.log(meanNumber([20,30,40,50,null,"60"])); // 35