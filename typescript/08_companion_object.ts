// コンパニオンオブジェクトパターン: クラスと同名の名前空間を使ってスタティックメンバーを整理

// クラスの定義
class User {
    constructor(
        public readonly id: string,
        public name: string,
        public email: string
    ) {}

    // インスタンスメソッド
    updateName(newName: string): void {
        this.name = newName;
    }
}

// コンパニオンオブジェクト（名前空間）
namespace User {
    // スタティックファクトリーメソッド
    export function create(name: string, email: string): User {
        const id = generateId();
        return new User(id, name, email);
    }

    // スタティックメソッド: バリデーション
    export function isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // プライベートヘルパー関数（exportしない）
    function generateId(): string {
        return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // 定数
    export const MAX_NAME_LENGTH = 50;
    export const MIN_NAME_LENGTH = 2;
}

// 使用例
const user1 = User.create("太郎", "taro@example.com");
console.log(user1); // 出力: User { id: 'user_...', name: '太郎', email: 'taro@example.com' }

// バリデーションの使用
console.log(User.isValidEmail("test@example.com")); // 出力: true
console.log(User.isValidEmail("invalid-email"));    // 出力: false

// 定数の使用
console.log(`名前の最大長: ${User.MAX_NAME_LENGTH}`); // 出力: 名前の最大長: 50

// より複雑な例: Productクラスとコンパニオンオブジェクト
class Product {
    constructor(
        public readonly id: string,
        public name: string,
        public price: number,
        public category: string
    ) {}

    getDisplayPrice(): string {
        return `¥${this.price.toLocaleString()}`;
    }
}

namespace Product {
    // 商品カテゴリの定数
    export const CATEGORY = {
        ELECTRONICS: "electronics",
        CLOTHING: "clothing",
        FOOD: "food",
        BOOKS: "books"
    } as const;

    // ファクトリーメソッド
    export function createElectronics(name: string, price: number): Product {
        return new Product(
            `prod_${Date.now()}`,
            name,
            price,
            CATEGORY.ELECTRONICS
        );
    }

    export function createBook(name: string, price: number): Product {
        return new Product(
            `prod_${Date.now()}`,
            name,
            price,
            CATEGORY.BOOKS
        );
    }

    // バリデーション
    export function isValidPrice(price: number): boolean {
        return price > 0 && isFinite(price);
    }

    // ヘルパーメソッド
    export function compareByPrice(a: Product, b: Product): number {
        return a.price - b.price;
    }
}

// 使用例
const laptop = Product.createElectronics("ノートパソコン", 120000);
const book = Product.createBook("TypeScript入門", 3000);

console.log(laptop); // 出力: Product { id: '...', name: 'ノートパソコン', ... }
console.log(book.getDisplayPrice()); // 出力: ¥3,000

// バリデーション
console.log(Product.isValidPrice(1000));  // 出力: true
console.log(Product.isValidPrice(-100));  // 出力: false

// ソート
const products = [laptop, book];
products.sort(Product.compareByPrice);
console.log(products.map(p => p.name)); // 出力: ['TypeScript入門', 'ノートパソコン']

// コンパニオンオブジェクトパターンの利点:
// 1. 関連する機能をクラスと同じ名前空間にまとめられる
// 2. ファクトリーメソッドや定数を整理できる
// 3. TypeScriptの型システムと統合できる
