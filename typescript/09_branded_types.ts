// ブランド型パターン: 同じプリミティブ型でも異なる型として扱う

// ブランド型の定義
// 通常のstringやnumberでは型の区別がつかない問題を解決

// ユニークシンボルを使ったブランド型
type Brand<K, T> = K & { __brand: T };

// 具体的なブランド型の定義
type UserId = Brand<string, "UserId">;
type Email = Brand<string, "Email">;
type ProductId = Brand<string, "ProductId">;

// ブランド型を作成する関数（スマートコンストラクタ）
function createUserId(id: string): UserId {
    // バリデーションロジックをここに追加可能
    if (id.length < 5) {
        throw new Error("User IDは5文字以上である必要があります");
    }
    return id as UserId;
}

function createEmail(email: string): Email {
    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("無効なメールアドレスです");
    }
    return email as Email;
}

function createProductId(id: string): ProductId {
    if (id.indexOf("PROD_") !== 0) {
        throw new Error("Product IDはPROD_で始まる必要があります");
    }
    return id as ProductId;
}

// ブランド型を使った関数
function getUserById(userId: UserId): string {
    // userIdは必ずUserId型なので、型安全
    console.log(`ユーザーID ${userId} を検索中...`);
    return `User with ID: ${userId}`;
}

function sendEmail(to: Email, subject: string, body: string): void {
    console.log(`メール送信: ${to}`);
    console.log(`件名: ${subject}`);
}

function getProduct(productId: ProductId): string {
    console.log(`商品ID ${productId} を検索中...`);
    return `Product with ID: ${productId}`;
}

// 使用例
try {
    const userId = createUserId("user_12345");
    const email = createEmail("user@example.com");
    const productId = createProductId("PROD_ABC123");

    // 正しい型を使用
    getUserById(userId);           // OK
    sendEmail(email, "件名", "本文"); // OK
    getProduct(productId);         // OK

    // 誤った型を使用するとコンパイルエラー
    // getUserById(email);         // エラー: Email型はUserId型に代入できない
    // sendEmail(userId, "件名", "本文"); // エラー: UserId型はEmail型に代入できない
    // getProduct(userId);         // エラー: UserId型はProductId型に代入できない

    // 通常のstringは使用できない
    // getUserById("user_12345");  // エラー: string型はUserId型に代入できない

} catch (error) {
    console.error(error);
}

// 数値型のブランド型の例
type Positive = Brand<number, "Positive">;
type Percentage = Brand<number, "Percentage">;

function createPositive(n: number): Positive {
    if (n <= 0) {
        throw new Error("正の数である必要があります");
    }
    return n as Positive;
}

function createPercentage(n: number): Percentage {
    if (n < 0 || n > 100) {
        throw new Error("パーセンテージは0から100の間である必要があります");
    }
    return n as Percentage;
}

function calculateArea(width: Positive, height: Positive): Positive {
    return (width * height) as Positive;
}

function applyDiscount(price: Positive, discount: Percentage): Positive {
    const discountAmount = price * (discount / 100);
    return (price - discountAmount) as Positive;
}

// 使用例
try {
    const width = createPositive(10);
    const height = createPositive(5);
    const area = calculateArea(width, height);
    console.log(`面積: ${area}`); // 出力: 面積: 50

    const price = createPositive(1000);
    const discount = createPercentage(20);
    const finalPrice = applyDiscount(price, discount);
    console.log(`割引後の価格: ${finalPrice}`); // 出力: 割引後の価格: 800

    // 不正な値はエラーになる
    // const invalid = createPositive(-5);    // エラー: 正の数である必要があります
    // const invalid2 = createPercentage(150); // エラー: 0-100の範囲外

} catch (error) {
    console.error(error);
}

// ブランド型パターンの利点:
// 1. コンパイル時に型の誤用を検出できる
// 2. プリミティブ型に意味を持たせることができる
// 3. バリデーションロジックを一箇所にまとめられる
// 4. APIの型安全性が向上する
// 5. リファクタリングが安全になる
