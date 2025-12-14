// 配列メソッド: 配列の操作に使用する便利なメソッド

const numbers = [1, 2, 3, 4, 5];

// map: 各要素を変換して新しい配列を作成
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // 出力: [2, 4, 6, 8, 10]

// アロー関数を使った書き方
const tripled = numbers.map(num => num * 3);
console.log(tripled); // 出力: [3, 6, 9, 12, 15]

// filter: 条件に合う要素だけを抽出
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // 偶数のみ
});
console.log(evenNumbers); // 出力: [2, 4]

const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // 出力: [4, 5]

// find: 条件に合う最初の要素を取得
const found = numbers.find(num => num > 3);
console.log(found); // 出力: 4

// reduce: 配列を1つの値に集約
const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0); // 初期値は0
console.log(sum); // 出力: 15

// アロー関数での書き方
const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log(product); // 出力: 120 (1 * 2 * 3 * 4 * 5)

// forEach: 各要素に対して処理を実行（返り値なし）
numbers.forEach(function(num, index) {
    console.log(`インデックス${index}: ${num}`);
});

// some: 1つでも条件に合う要素があるか確認
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // 出力: true

// every: すべての要素が条件に合うか確認
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // 出力: true

// includes: 特定の値が含まれているか確認
console.log(numbers.includes(3)); // 出力: true
console.log(numbers.includes(10)); // 出力: false

// indexOf: 要素の位置を取得
console.log(numbers.indexOf(3)); // 出力: 2
console.log(numbers.indexOf(10)); // 出力: -1（見つからない）

// join: 配列を文字列に変換
const fruits = ["りんご", "バナナ", "オレンジ"];
console.log(fruits.join(", ")); // 出力: りんご, バナナ, オレンジ

// concat: 配列を連結
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined); // 出力: [1, 2, 3, 4, 5, 6, 7, 8]

// slice: 配列の一部を抽出（元の配列は変更されない）
const sliced = numbers.slice(1, 4);
console.log(sliced); // 出力: [2, 3, 4]

// splice: 配列の要素を追加・削除（元の配列を変更）
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // インデックス2から1個削除
console.log(arr); // 出力: [1, 2, 4, 5]

// sort: 配列を並び替え（元の配列を変更）
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // 昇順
console.log(unsorted); // 出力: [1, 1, 3, 4, 5, 9]

// reverse: 配列を反転（元の配列を変更）
const original = [1, 2, 3];
original.reverse();
console.log(original); // 出力: [3, 2, 1]
