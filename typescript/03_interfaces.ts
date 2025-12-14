// インターフェース: オブジェクトの構造を定義

// インターフェースの定義
interface Person {
    name: string;      // 必須プロパティ
    age: number;       // 必須プロパティ
    email?: string;    // オプショナルプロパティ（? を付ける）
}

// インターフェースを使用してオブジェクトを作成
const person1: Person = {
    name: "太郎",
    age: 25,
    email: "taro@example.com"
};

const person2: Person = {
    name: "花子",
    age: 30
    // email は省略可能
};

console.log(person1); // 出力: { name: '太郎', age: 25, email: 'taro@example.com' }
console.log(person2); // 出力: { name: '花子', age: 30 }

// インターフェースを使用した関数の引数
function displayPerson(person: Person): void {
    console.log(`名前: ${person.name}, 年齢: ${person.age}`);
    if (person.email) {
        console.log(`メール: ${person.email}`);
    }
}

displayPerson(person1); // 出力: 名前: 太郎, 年齢: 25 / メール: taro@example.com
displayPerson(person2); // 出力: 名前: 花子, 年齢: 30

// メソッドを含むインターフェース
interface Calculator {
    value: number;
    add(num: number): number;    // メソッドの型定義
    subtract(num: number): number;
}

const calc: Calculator = {
    value: 0,
    add(num: number): number {
        this.value += num;
        return this.value;
    },
    subtract(num: number): number {
        this.value -= num;
        return this.value;
    }
};

console.log(calc.add(10));      // 出力: 10
console.log(calc.subtract(3));  // 出力: 7
