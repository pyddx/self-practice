// 1. Object Array + map, filter, reduce
let ingredients = [
  { name: "flour", quantity: 500 },
  { name: "sugar", quantity: 200 },
  { name: "butter", quantity: 100 },
  { name: "eggs", quantity: 4 }
];

// เพิ่มปริมาณ 1.5 เท่า
let increased = ingredients.map(item => {
  return { ...item, quantity: item.quantity * 1.5 };// สร้าง object ใหม่โดยคัดลอก item เดิมแล้วแก้ quantity
});
console.log(increased); 

// เลือกเฉพาะที่ quantity > 150
let filtered = ingredients.filter(item => item.quantity > 150);
console.log(filtered);// [ { name: 'flour', quantity: 500 }, { name: 'sugar', quantity: 200 } ]

// หาผลรวม quantity ทั้งหมด
let totalQuantity = ingredients.reduce((sum, item) => sum + item.quantity, 0);
console.log(totalQuantity);// 804


// 2. Array Methods (push, pop, shift, unshift)
let players = ["Alice", "Bob", "Charlie"];

// เพิ่มท้าย
players.push("Dave");// เพิ่มท้าย
console.log(players);// ['Alice', 'Bob', 'Charlie', 'Dave']

// เอาตัวท้ายออก
let lastPlayer = players.pop();
console.log(lastPlayer);// Dave
console.log(players);// ['Alice', 'Bob', 'Charlie']

// เพิ่มหัว array
players.unshift("Zoe");
console.log(players);

// เอาหัวออก
let firstPlayer = players.shift();
console.log(firstPlayer);
console.log(players);


// 3. slice / splice
let nums = [5, 10, 15, 20, 25, 30];

// slice → copy เฉพาะบางส่วน
let subArray = nums.slice(1, 4);
console.log(subArray);

// splice → ลบ/เพิ่ม แทนที่ใน array
nums.splice(3, 2, 18, 22);
console.log(nums);// [5, 10, 15, 18, 22, 30]


// 4. search / sort
let scores = [85, 92, 78, 90, 88];
console.log(scores.indexOf(90)); // หาตำแหน่ง 90
console.log(scores.includes(95)); // มี 95 ไหม? false

// sort ลดหลั่น
scores.sort((a,b) => b-a);// จากมากไปน้อย
console.log(scores);// [92, 90, 88, 85, 78]


// 5. join / toString
let countries = ["Thailand", "Japan", "Brazil", "Canada"];
console.log(countries.join(" | ")); // เชื่อมด้วย " | "
console.log(countries.toString()); // แปลงเป็น string


