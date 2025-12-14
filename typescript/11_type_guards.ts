// 型ガード: 型を絞り込むためのテクニック

// typeof 型ガード: プリミティブ型の判定
function processValue(value: string | number): string {
    if (typeof value === "string") {
        // この中では value は string 型
        return value.toUpperCase();
    } else {
        // この中では value は number 型
        return value.toFixed(2);
    }
}

console.log(processValue("hello")); // 出力: HELLO
console.log(processValue(3.14159)); // 出力: 3.14

// instanceof 型ガード: クラスのインスタンスを判定
class Dog {
    bark(): void {
        console.log("ワンワン！");
    }
}

class Cat {
    meow(): void {
        console.log("ニャー！");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        // この中では animal は Dog 型
        animal.bark();
    } else {
        // この中では animal は Cat 型
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // 出力: ワンワン！
makeSound(cat); // 出力: ニャー！

// in 演算子による型ガード: プロパティの存在確認
interface Car {
    drive(): void;
    wheels: number;
}

interface Boat {
    sail(): void;
    sails: number;
}

function operateVehicle(vehicle: Car | Boat): void {
    if ("drive" in vehicle) {
        // drive プロパティがあれば Car 型
        vehicle.drive();
        console.log(`車輪の数: ${vehicle.wheels}`);
    } else {
        // なければ Boat 型
        vehicle.sail();
        console.log(`帆の数: ${vehicle.sails}`);
    }
}

const car: Car = {
    drive: () => console.log("運転中..."),
    wheels: 4
};

const boat: Boat = {
    sail: () => console.log("航海中..."),
    sails: 2
};

operateVehicle(car);  // 出力: 運転中... / 車輪の数: 4
operateVehicle(boat); // 出力: 航海中... / 帆の数: 2

// 判別可能なユニオン型（Discriminated Unions）
interface Circle {
    kind: "circle";  // 判別プロパティ
    radius: number;
}

interface Rectangle {
    kind: "rectangle"; // 判別プロパティ
    width: number;
    height: number;
}

interface Triangle {
    kind: "triangle"; // 判別プロパティ
    base: number;
    height: number;
}

type Shape = Circle | Rectangle | Triangle;

function getArea(shape: Shape): number {
    // kind プロパティで型を判別
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };
const triangle: Triangle = { kind: "triangle", base: 8, height: 6 };

console.log(`円の面積: ${getArea(circle).toFixed(2)}`);        // 出力: 円の面積: 78.54
console.log(`長方形の面積: ${getArea(rectangle)}`);            // 出力: 長方形の面積: 200
console.log(`三角形の面積: ${getArea(triangle)}`);             // 出力: 三角形の面積: 24

// カスタム型ガード関数
function isString(value: unknown): value is string {
    // 戻り値の型が "value is string" となっている
    return typeof value === "string";
}

function processUnknown(value: unknown): void {
    if (isString(value)) {
        // この中では value は string 型として扱われる
        console.log(value.toUpperCase());
    } else {
        console.log("文字列ではありません");
    }
}

processUnknown("hello"); // 出力: HELLO
processUnknown(123);     // 出力: 文字列ではありません

// null と undefined のチェック
function printLength(text: string | null | undefined): void {
    // null または undefined をチェック
    if (text != null) {
        // この中では text は string 型
        console.log(`長さ: ${text.length}`);
    } else {
        console.log("テキストがありません");
    }
}

printLength("こんにちは"); // 出力: 長さ: 5
printLength(null);        // 出力: テキストがありません
printLength(undefined);   // 出力: テキストがありません

// 配列の型ガード
function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}

function processArray(data: unknown): void {
    if (isStringArray(data)) {
        // この中では data は string[] 型
        data.forEach(str => console.log(str.toUpperCase()));
    } else {
        console.log("文字列の配列ではありません");
    }
}

processArray(["a", "b", "c"]); // 出力: A / B / C
processArray([1, 2, 3]);       // 出力: 文字列の配列ではありません
