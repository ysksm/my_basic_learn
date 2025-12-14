// TypeScriptの基本的な型

// string型: 文字列
let userName: string = "太郎";
console.log(userName); // 出力: 太郎

// number型: 数値（整数、小数どちらも）
let age: number = 25;
let price: number = 99.99;
console.log(age);   // 出力: 25
console.log(price); // 出力: 99.99

// boolean型: 真偽値
let isActive: boolean = true;
console.log(isActive); // 出力: true

// 配列型: 特定の型の配列
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["りんご", "バナナ"];
console.log(numbers); // 出力: [1, 2, 3, 4, 5]

// または、Array<型>の書き方
let colors: Array<string> = ["赤", "青", "緑"];

// any型: どんな型でも許容（型チェックを無効化、推奨されない）
let anything: any = "文字列";
anything = 123; // 再代入可能
anything = true; // 再代入可能

// unknown型: 型安全なany（使用前に型チェックが必要）
let unknownValue: unknown = "文字列";
// console.log(unknownValue.length); // エラー: 型チェックなしでは使用できない

// void型: 戻り値がない関数に使用
function logMessage(message: string): void {
    console.log(message);
    // return文がない、またはreturnのみ
}

// null と undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
