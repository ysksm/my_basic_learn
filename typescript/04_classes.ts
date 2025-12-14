// クラス: オブジェクトの設計図を定義

// クラスの定義
class Person {
    // プロパティの宣言
    name: string;
    age: number;

    // コンストラクタ: クラスのインスタンス作成時に実行される
    constructor(name: string, age: number) {
        this.name = name; // thisはクラスのインスタンスを参照
        this.age = age;
    }

    // メソッド: クラスに関連する関数
    introduce(): string {
        return `私は${this.name}で、${this.age}歳です。`;
    }

    // 年齢を1増やすメソッド
    celebrateBirthday(): void {
        this.age++;
        console.log(`誕生日おめでとう！${this.age}歳になりました。`);
    }
}

// クラスのインスタンスを作成
const person1 = new Person("太郎", 25);
console.log(person1.introduce()); // 出力: 私は太郎で、25歳です。
person1.celebrateBirthday();      // 出力: 誕生日おめでとう！26歳になりました。

// アクセス修飾子: public, private, protected
class BankAccount {
    public accountNumber: string;  // どこからでもアクセス可能（デフォルト）
    private balance: number;       // クラス内のみアクセス可能

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // 残高を取得するメソッド（privateプロパティへの安全なアクセス）
    getBalance(): number {
        return this.balance;
    }

    // 入金メソッド
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount}円入金しました。残高: ${this.balance}円`);
        }
    }
}

const account = new BankAccount("123456", 1000);
console.log(account.accountNumber); // 出力: 123456
console.log(account.getBalance());  // 出力: 1000
// console.log(account.balance);    // エラー: privateプロパティは外部からアクセスできない
account.deposit(500);               // 出力: 500円入金しました。残高: 1500円
