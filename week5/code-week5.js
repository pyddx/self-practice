arr.map(num => num * num)
   .filter(num => num % 2 !== 0)
   .reduce((sum, num) => sum + num, 0);

Array(length).fill(value)

function processNumbers(arr) {
  return arr
    .map(num => num * num)        //.map: ยกกำลังสองทุกค่าใน array
    .filter(num => num % 2 !== 0)  //.filter: เลือกเฉพาะเลขคี่ (num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0); // .reduce: รวมค่าทั้งหมดเป็นผลรวม
}
console.log( processNumbers([1, 2, 3, 4])); // 10
console.log( processNumbers([5, 6, 7, 8])); // 74

function populateArray(length, value) {
  return Array(length).fill(value); 
}
console.log(populateArray(3, 'a') ); // [ 'a', 'a', 'a' ]
console.log( populateArray(5, 0) ); // [ 0, 0, 0, 0, 0 ]

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log( removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])); // ['a', 'b', 'c']
console.log(removeFalsyValues([null, undefined, 'A'])); // ['A']

function removeDuplicateWords(sentence) {
  if (!sentence) return "";

  const words = sentence.split(" ");   //.split(" "): แยกคำใน string เป็น array
  const seen = new Set();            
  const result = [];

  for (let word of words) { //Loop + lowercase: ตรวจ case-insensitive
    const lowerWord = word.toLowerCase();
    if (!seen.has(lowerWord)) {
      seen.add(lowerWord);  
      result.push(word);  
    }
  }

  return result.join(" ");  //.join(" "): รวม array กลับเป็น string
}
console.log(removeDuplicateWords("This is a test This test is easy."));  // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")); // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")); // "One two three"
console.log(removeDuplicateWords("")); // ""
console.log(removeDuplicateWords(null)); // ""


function getFreqOfWords(sentence) { //แปลง string → lowercase → array → filter empty
  if (sentence == null) return undefined;

  const words = sentence.toLowerCase().split(" ").filter(w => w !== "");
  const freq = {};

  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1; //(freq[word] || 0) + 1: กำหนดค่า default และบวกทีละ 1
  }

  return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'));
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'));
// { do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null)); // undefined
console.log(getFreqOfWords(undefined)); // undefined