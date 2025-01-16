// Day 08 - 運算子大雜燴
// 1. 請問變數 c 的值
let a = 1;
let b = "1";
let c = (a===b) && (a!==b);
// Ans:false

// 2. 請問變數 g 的值
let e = '123'; 
let f = 456;
let g = (e+f) === '123456'; 
// Ans:true

// 3. 請問變數 j, k 的值 
let h = true;
let i = false;
let j = 1 == h;
let k = h || i;
//Ans:j true ; k true

console.log(c, g, j, k);