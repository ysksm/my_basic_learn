// 文字列メソッド: 文字列の操作に使用する便利なメソッド

const text = "こんにちは、世界！";

// length: 文字列の長さを取得
console.log(text.length); // 出力: 10

// toUpperCase / toLowerCase: 大文字・小文字変換（英字のみ）
const english = "Hello World";
console.log(english.toUpperCase()); // 出力: HELLO WORLD
console.log(english.toLowerCase()); // 出力: hello world

// indexOf: 文字列の位置を検索（最初に見つかった位置を返す）
console.log(text.indexOf("世界")); // 出力: 7
console.log(text.indexOf("さようなら")); // 出力: -1（見つからない場合）

// slice: 文字列の一部を抽出
const str = "JavaScript";
console.log(str.slice(0, 4));  // 出力: Java（0番目から3番目まで）
console.log(str.slice(4));     // 出力: Script（4番目から最後まで）
console.log(str.slice(-6));    // 出力: Script（後ろから6文字）

// substring: 文字列の一部を抽出（sliceに似ているが負の値は使えない）
console.log(str.substring(0, 4)); // 出力: Java

// replace: 文字列の置換（最初に見つかった部分のみ）
const message = "こんにちは、太郎さん！";
console.log(message.replace("太郎", "花子")); // 出力: こんにちは、花子さん！

// split: 文字列を配列に分割
const csv = "りんご,バナナ,オレンジ";
const fruits = csv.split(",");
console.log(fruits); // 出力: ['りんご', 'バナナ', 'オレンジ']

const sentence = "これは テストです";
const words = sentence.split(" ");
console.log(words); // 出力: ['これは', 'テストです']

// trim: 前後の空白を削除
const spacedText = "   こんにちは   ";
console.log(spacedText.trim()); // 出力: こんにちは

// includes: 文字列が含まれているか確認（真偽値を返す）
const greeting = "おはようございます";
console.log(greeting.includes("おはよう")); // 出力: true
console.log(greeting.includes("こんにちは")); // 出力: false

// startsWith / endsWith: 文字列の始まり・終わりを確認
const url = "https://example.com";
console.log(url.startsWith("https")); // 出力: true
console.log(url.endsWith(".com"));    // 出力: true

// repeat: 文字列を繰り返す
console.log("あ".repeat(5)); // 出力: あああああ

// concat: 文字列を連結（+ 演算子でも可能）
const firstName = "太郎";
const lastName = "山田";
console.log(firstName.concat(" ", lastName)); // 出力: 太郎 山田
console.log(firstName + " " + lastName);      // 出力: 太郎 山田

// charAt: 指定位置の文字を取得
const name = "JavaScript";
console.log(name.charAt(0));  // 出力: J
console.log(name.charAt(4));  // 出力: S

// テンプレートリテラル: バッククォート（`）を使った文字列
const user = "太郎";
const age = 25;
console.log(`私の名前は${user}で、${age}歳です。`); 
// 出力: 私の名前は太郎で、25歳です。
