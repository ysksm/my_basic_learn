// 関数の定義と呼び出し

// 関数宣言: function キーワードを使用
function greet(name) {
    // name: 引数（パラメータ）
    return "こんにちは、" + name + "さん！"; // 戻り値を返す
}

// 関数の呼び出し
const message = greet("太郎"); // 引数 "太郎" を渡して関数を実行
console.log(message); // 出力: こんにちは、太郎さん！

// 関数式: 変数に関数を代入
const add = function(a, b) {
    return a + b; // 2つの引数を足した結果を返す
};

console.log(add(5, 3)); // 出力: 8

// アロー関数: より簡潔な書き方（ES6以降）
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 3)); // 出力: 12

// アロー関数の短縮形（単一の式の場合）
const square = x => x * x; // returnを省略できる

console.log(square(5)); // 出力: 25
