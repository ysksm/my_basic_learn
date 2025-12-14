// ユニオン型と交差型: 複数の型を組み合わせる

// ユニオン型（Union Types）: 複数の型のいずれかであることを表す
// | 演算子を使用

// 基本的なユニオン型
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "文字列"; // OK
value = 123;      // OK
// value = true;  // エラー: boolean は許可されていない

// 関数の引数でユニオン型を使用
function printId(id: string | number): void {
    console.log(`ID: ${id}`);
}

printId(101);      // 出力: ID: 101
printId("ABC123"); // 出力: ID: ABC123

// 型ガード: ユニオン型の具体的な型を判定
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        // この中では value は string 型として扱われる
        return value.toUpperCase();
    } else {
        // この中では value は number 型として扱われる
        return value.toFixed(2);
    }
}

console.log(formatValue("hello")); // 出力: HELLO
console.log(formatValue(3.14159)); // 出力: 3.14

// リテラル型のユニオン
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction): void {
    console.log(`${direction}に移動します`);
}

move("north"); // OK
// move("up"); // エラー: "up" は Direction 型ではない

// オブジェクト型のユニオン
type Dog = {
    type: "dog";
    bark: () => void;
};

type Cat = {
    type: "cat";
    meow: () => void;
};

type Pet = Dog | Cat;

function petSound(pet: Pet): void {
    // type プロパティで型を判別（判別可能なユニオン型）
    if (pet.type === "dog") {
        pet.bark(); // Dog 型として扱われる
    } else {
        pet.meow(); // Cat 型として扱われる
    }
}

const myDog: Dog = {
    type: "dog",
    bark: () => console.log("ワンワン！")
};

const myCat: Cat = {
    type: "cat",
    meow: () => console.log("ニャー！")
};

petSound(myDog); // 出力: ワンワン！
petSound(myCat); // 出力: ニャー！

// 交差型（Intersection Types）: 複数の型をすべて満たす型
// & 演算子を使用

interface Nameable {
    name: string;
}

interface Ageable {
    age: number;
}

// 交差型: Nameable と Ageable の両方のプロパティを持つ
type Person = Nameable & Ageable;

const person: Person = {
    name: "太郎",
    age: 25
    // 両方のプロパティが必要
};

console.log(person); // 出力: { name: '太郎', age: 25 }

// 交差型を使った型の拡張
interface Contact {
    email: string;
    phone: string;
}

type Employee = Person & Contact & {
    employeeId: string;
    department: string;
};

const employee: Employee = {
    name: "花子",
    age: 30,
    email: "hanako@example.com",
    phone: "090-1234-5678",
    employeeId: "EMP001",
    department: "開発部"
};

console.log(employee);

// 関数の型を交差型で組み合わせる
type Printable = {
    print: () => void;
};

type Serializable = {
    serialize: () => string;
};

type PrintableDocument = Printable & Serializable;

const doc: PrintableDocument = {
    print: () => console.log("印刷中..."),
    serialize: () => JSON.stringify({ content: "ドキュメント" })
};

doc.print();           // 出力: 印刷中...
console.log(doc.serialize()); // 出力: {"content":"ドキュメント"}

// ユニオン型と交差型の組み合わせ
type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    level: number;
};

type Account = (Admin | User) & {
    username: string;
    createdAt: Date;
};

const adminAccount: Account = {
    role: "admin",
    permissions: ["read", "write", "delete"],
    username: "admin_user",
    createdAt: new Date()
};

const userAccount: Account = {
    role: "user",
    level: 5,
    username: "regular_user",
    createdAt: new Date()
};

console.log(adminAccount);
console.log(userAccount);
