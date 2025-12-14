// 配列の使い方

// 配列の作成: 複数の値を順序付きで格納
const fruits = ["りんご", "バナナ", "オレンジ"];

// 配列の要素にアクセス（インデックスは0から始まる）
console.log(fruits[0]); // 出力: りんご
console.log(fruits[1]); // 出力: バナナ

// 配列の長さを取得
console.log(fruits.length); // 出力: 3

// 配列の末尾に要素を追加
fruits.push("ぶどう");
console.log(fruits); // 出力: ["りんご", "バナナ", "オレンジ", "ぶどう"]

// 配列の末尾から要素を削除
const lastFruit = fruits.pop();
console.log(lastFruit); // 出力: ぶどう
console.log(fruits); // 出力: ["りんご", "バナナ", "オレンジ"]

// 配列のループ処理
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 各要素を順番に出力
}

// forEachメソッドを使ったループ
fruits.forEach(function(fruit) {
    console.log(fruit); // 各要素を順番に出力
});
