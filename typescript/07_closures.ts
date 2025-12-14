// クロージャ（Closure）: TypeScriptでの型安全なクロージャの実装

// 基本的なクロージャ: カウンター関数
function createCounter(): () => number {
    // プライベート変数
    let count: number = 0;
    
    // クロージャを返す
    return (): number => {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 出力: 1
console.log(counter()); // 出力: 2
console.log(counter()); // 出力: 3

// 型定義を使ったクロージャ
interface Counter {
    increment: () => number;
    decrement: () => number;
    reset: () => void;
    getValue: () => number;
}

function createAdvancedCounter(initialValue: number = 0): Counter {
    let value: number = initialValue;
    
    return {
        increment: (): number => {
            value++;
            return value;
        },
        decrement: (): number => {
            value--;
            return value;
        },
        reset: (): void => {
            value = initialValue;
        },
        getValue: (): number => {
            return value;
        }
    };
}

const myCounter = createAdvancedCounter(10);
console.log(myCounter.increment()); // 出力: 11
console.log(myCounter.increment()); // 出力: 12
console.log(myCounter.decrement()); // 出力: 11
console.log(myCounter.getValue());  // 出力: 11
myCounter.reset();
console.log(myCounter.getValue());  // 出力: 10

// ジェネリクスを使ったクロージャ
function createStore<T>(initialValue: T): {
    get: () => T;
    set: (value: T) => void;
} {
    let value: T = initialValue;
    
    return {
        get: (): T => value,
        set: (newValue: T): void => {
            value = newValue;
        }
    };
}

const stringStore = createStore<string>("こんにちは");
console.log(stringStore.get()); // 出力: こんにちは
stringStore.set("さようなら");
console.log(stringStore.get()); // 出力: さようなら

const numberStore = createStore<number>(100);
console.log(numberStore.get()); // 出力: 100
numberStore.set(200);
console.log(numberStore.get()); // 出力: 200

// クロージャを使った関数ファクトリー
function createValidator(minLength: number): (value: string) => boolean {
    // minLengthを記憶するクロージャ
    return (value: string): boolean => {
        return value.length >= minLength;
    };
}

const isValidPassword = createValidator(8);
const isValidUsername = createValidator(3);

console.log(isValidPassword("abc"));      // 出力: false
console.log(isValidPassword("password123")); // 出力: true
console.log(isValidUsername("ab"));       // 出力: false
console.log(isValidUsername("user"));     // 出力: true
