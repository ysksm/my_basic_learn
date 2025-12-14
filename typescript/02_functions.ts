// TypeScriptの関数: 型注釈付きの関数定義と呼び出し

// 関数の定義: 引数と戻り値に型を指定
function greet(name: string): string {
    // name: 引数（string型）
    // : string は戻り値の型を指定
    return "こんにちは、" + name + "さん！";
}

// 関数の呼び出し
const message: string = greet("太郎");
console.log(message); // 出力: こんにちは、太郎さん！

// greet(123); // エラー: 引数はstring型でなければならない

// 複数の引数を持つ関数
function add(a: number, b: number): number {
    return a + b; // 数値の合計を返す
}

const sum: number = add(5, 3);
console.log(sum); // 出力: 8

// オプション引数: ? を使用して省略可能な引数を定義
function introduce(name: string, age?: number): string {
    // age は省略可能（undefined になる可能性がある）
    if (age !== undefined) {
        return `私は${name}で、${age}歳です。`;
    }
    return `私は${name}です。`;
}

console.log(introduce("太郎", 25));  // 出力: 私は太郎で、25歳です。
console.log(introduce("花子"));      // 出力: 私は花子です。

// デフォルト引数: 引数にデフォルト値を設定
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5, 3)); // 出力: 15
console.log(multiply(5));    // 出力: 10（bは2がデフォルト）

// アロー関数（ラムダ式）: 型注釈付き
const divide = (a: number, b: number): number => {
    return a / b;
};

console.log(divide(10, 2)); // 出力: 5

// アロー関数の短縮形
const square = (x: number): number => x * x;

console.log(square(4)); // 出力: 16
