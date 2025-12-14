// オブジェクトの使い方

// オブジェクトの作成: キーと値のペアでデータを格納
const person = {
    name: "太郎",      // プロパティ: name
    age: 25,           // プロパティ: age
    city: "東京"       // プロパティ: city
};

// オブジェクトのプロパティにアクセス（ドット記法）
console.log(person.name); // 出力: 太郎
console.log(person.age);  // 出力: 25

// オブジェクトのプロパティにアクセス（ブラケット記法）
console.log(person["city"]); // 出力: 東京

// プロパティの値を変更
person.age = 26;
console.log(person.age); // 出力: 26

// 新しいプロパティを追加
person.hobby = "読書";
console.log(person.hobby); // 出力: 読書

// メソッド: オブジェクトに関数を定義
const calculator = {
    value: 0,
    add: function(num) {
        this.value += num; // this はオブジェクト自身を参照
        return this.value;
    }
};

console.log(calculator.add(5));  // 出力: 5
console.log(calculator.add(10)); // 出力: 15
