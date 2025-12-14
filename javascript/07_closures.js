// クロージャ（Closure）: 関数が外側のスコープの変数にアクセスできる仕組み

// 基本的なクロージャの例
function createCounter() {
    // この変数はcreateCounter関数のスコープ内
    let count = 0;
    
    // 内側の関数（クロージャ）が外側の変数countにアクセスできる
    return function() {
        count++; // 外側のスコープのcountを変更
        return count;
    };
}

// クロージャを作成
const counter = createCounter();

console.log(counter()); // 出力: 1
console.log(counter()); // 出力: 2
console.log(counter()); // 出力: 3
// countは外部からアクセスできないが、counter関数を通じて操作できる

// 別のカウンターを作成（独立した状態を持つ）
const counter2 = createCounter();
console.log(counter2()); // 出力: 1（counter とは別の状態）

// プライベート変数のパターン
function createPerson(name) {
    // プライベート変数（外部から直接アクセスできない）
    let age = 0;
    
    // 公開メソッドを持つオブジェクトを返す
    return {
        getName: function() {
            return name; // クロージャでnameにアクセス
        },
        getAge: function() {
            return age; // クロージャでageにアクセス
        },
        setAge: function(newAge) {
            if (newAge >= 0) {
                age = newAge; // クロージャでageを変更
            }
        },
        haveBirthday: function() {
            age++; // クロージャでageを増加
            console.log(`${name}は${age}歳になりました！`);
        }
    };
}

const person = createPerson("太郎");
console.log(person.getName()); // 出力: 太郎
person.setAge(25);
console.log(person.getAge());  // 出力: 25
person.haveBirthday();         // 出力: 太郎は26歳になりました！
// console.log(person.age);    // undefined: ageは直接アクセスできない

// 関数ファクトリーパターン
function createMultiplier(multiplier) {
    // multiplierを記憶するクロージャ
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 出力: 10 (5 * 2)
console.log(triple(5)); // 出力: 15 (5 * 3)

// クロージャの利点:
// 1. データのカプセル化（プライベート変数の実現）
// 2. 状態の保持
// 3. ファクトリー関数の実装
