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


// Day 09 - if、else if、else 練習一
//題目一 如果下雨我就坐捷運上班，沒有我就騎車上班
let weather = '雨天';

/* 請試著寫出判斷式 */

//題目二 如果 BMI > 24 就超重，18 ~ 24 體重正常，小於 18 過輕。（提示：補上問號部分)
let myBMI = 19;

/* 請試著寫出判斷式 */

if( ??? ) {
  console.log('過重');
} else if( ??? ) {
  console.log('體重正常');
} else {
  console.log('過輕');
}
