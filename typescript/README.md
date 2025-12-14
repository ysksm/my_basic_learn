# TypeScriptサンプル集

このフォルダには、TypeScriptの基本的な文法と型システムを学ぶためのサンプルファイルが含まれています。
各ファイルは1つの概念に焦点を当てています。

## サンプル一覧

1. **01_basic_types.ts** - 基本的な型
   - string, number, boolean
   - 配列型
   - any, unknown, void

2. **02_functions.ts** - 関数の定義と呼び出し
   - 型注釈付き関数
   - オプション引数
   - デフォルト引数
   - アロー関数

3. **03_interfaces.ts** - インターフェース
   - オブジェクトの構造定義
   - オプショナルプロパティ
   - メソッドを含むインターフェース

4. **04_classes.ts** - クラス
   - クラスの定義
   - コンストラクタ
   - メソッド
   - アクセス修飾子（public, private）

5. **05_enums.ts** - Enum（列挙型）
   - 数値列挙型
   - 文字列列挙型
   - Enumを使った型安全なコード

6. **06_generics.ts** - ジェネリクス
   - ジェネリック関数
   - ジェネリッククラス
   - 型パラメータの使用

7. **07_closures.ts** - クロージャ
   - 型安全なクロージャ
   - インターフェースを使ったクロージャ
   - ジェネリクスとクロージャ

8. **08_companion_object.ts** - コンパニオンオブジェクトパターン
   - クラスと名前空間の組み合わせ
   - スタティックファクトリーメソッド
   - 関連する機能の整理

9. **09_branded_types.ts** - ブランド型パターン
   - 型安全なプリミティブ型
   - スマートコンストラクタ
   - バリデーション付き型

## 実行方法

### TypeScriptのコンパイルと実行

1. TypeScriptのインストール（初回のみ）
```bash
npm install -g typescript
```

2. TypeScriptファイルをJavaScriptにコンパイル
```bash
tsc typescript/02_functions.ts
```

3. コンパイルされたJavaScriptファイルを実行
```bash
node typescript/02_functions.js
```

### ts-nodeを使った直接実行

1. ts-nodeのインストール（初回のみ）
```bash
npm install -g ts-node
```

2. TypeScriptファイルを直接実行
```bash
ts-node typescript/02_functions.ts
```

## TypeScriptの特徴

- **型安全性**: コンパイル時に型エラーを検出
- **IDEサポート**: コード補完や型情報の表示
- **最新のJavaScript機能**: ES6以降の機能をサポート
