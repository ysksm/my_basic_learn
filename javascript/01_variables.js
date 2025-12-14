// 変数の宣言と使い方

// let: 再代入可能な変数を宣言
let name = "太郎"; // 文字列を代入
console.log(name); // 出力: 太郎

name = "花子"; // 再代入が可能
console.log(name); // 出力: 花子

// const: 再代入不可能な定数を宣言
const age = 25; // 数値を代入
console.log(age); // 出力: 25

// age = 30; // エラー: constで宣言された変数は再代入できない

// var: 古い書き方（現在はletとconstの使用が推奨される）
var city = "東京";
console.log(city); // 出力: 東京

// データ型の例
let number = 42; // 数値
let string = "こんにちは"; // 文字列
let boolean = true; // 真偽値（true/false）
let nullValue = null; // null
let undefinedValue = undefined; // undefined
