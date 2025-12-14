// ジェネリクス: 型をパラメータ化して再利用可能なコードを作成

// ジェネリック関数: 型パラメータ<T>を使用
function identity<T>(value: T): T {
    // T は任意の型を表す型パラメータ
    return value; // 引数と同じ型の値を返す
}

// 使用例: 型を指定して呼び出し
const numberValue = identity<number>(42);
console.log(numberValue); // 出力: 42

const stringValue = identity<string>("こんにちは");
console.log(stringValue); // 出力: こんにちは

// 型推論により、型指定を省略できる
const boolValue = identity(true); // TypeScriptが自動的に型を推論
console.log(boolValue); // 出力: true

// ジェネリック配列関数
function getFirstElement<T>(array: T[]): T | undefined {
    // 配列の最初の要素を返す（配列が空の場合はundefined）
    return array.length > 0 ? array[0] : undefined;
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber); // 出力: 1

const fruits = ["りんご", "バナナ", "オレンジ"];
const firstFruit = getFirstElement(fruits);
console.log(firstFruit); // 出力: りんご

// ジェネリッククラス
class Box<T> {
    private content: T; // 型パラメータTを使用

    constructor(content: T) {
        this.content = content;
    }

    // コンテンツを取得
    getContent(): T {
        return this.content;
    }

    // コンテンツを設定
    setContent(content: T): void {
        this.content = content;
    }
}

// number型のBox
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 出力: 123
numberBox.setContent(456);
console.log(numberBox.getContent()); // 出力: 456

// string型のBox
const stringBox = new Box<string>("プレゼント");
console.log(stringBox.getContent()); // 出力: プレゼント

// ジェネリクスの利点: 型安全性を保ちながら、様々な型で再利用可能なコードを書ける
