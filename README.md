# my_basic_learn

HTML、CSS、JavaScript、TypeScriptの基本文法を学ぶためのサンプルプログラム集です。

## 📁 プロジェクト構成

このリポジトリは、各技術ごとにフォルダが分かれており、それぞれのフォルダには基本的な文法要素を1つずつ学べるサンプルファイルが含まれています。

```
my_basic_learn/
├── html/          # 10 samples: structure, headings, paragraphs, links, images, lists, forms, tables, div/span, semantic tags
├── css/           # 9 samples: selectors, colors, box model, display, flexbox, grid, typography, position, transitions
├── javascript/    # 10 samples: variables, functions, arrays, objects, conditionals, loops, closures, string methods, array methods, async
└── typescript/    # 12 samples: basic types, functions, interfaces, classes, enums, generics, closures, companion object, branded types, unions/intersections, type guards, utility types
```

## 🎯 学習方針

- **1つの要素 = 1つのサンプル**: 各ファイルは1つの概念に焦点を当てています
- **コメント付き**: すべてのサンプルには日本語で詳しい解説が含まれています
- **実行可能**: すべてのサンプルはそのまま実行・表示できます

## 📚 各フォルダの内容

### HTML（html/）
HTMLの基本的なタグと構造を学びます。
- 基本構造、見出し、段落、リンク、画像、リスト、フォーム、テーブル、div/span、セマンティックタグなど

### CSS（css/）
CSSのスタイリングとレイアウト手法を学びます。
- セレクタ、色、ボックスモデル、display、Flexbox、Grid、タイポグラフィ、position、トランジションなど

### JavaScript（javascript/）
JavaScriptの基本文法とプログラミング概念を学びます。
- 変数、関数、配列、オブジェクト、条件分岐、ループ、クロージャ、文字列メソッド、配列メソッド、非同期処理など

### TypeScript（typescript/）
TypeScriptの型システムとオブジェクト指向プログラミング、デザインパターンを学びます。
- 基本型、関数、インターフェース、クラス、Enum、ジェネリクス、クロージャ、コンパニオンオブジェクト、ブランド型、ユニオン型/交差型、型ガード、ユーティリティ型など

## 🚀 使い方

### 🌐 GitHub Pagesでデモを見る
このプロジェクトはGitHub Pagesで公開されています：
**https://ysksm.github.io/my_basic_learn/**

オンラインでサンプルの実行結果を確認できます。

### ローカルでデモページを見る
```bash
# ブラウザでデモページを開く
open index.html
```
`index.html`は各サンプルを組み合わせた実践的なデモページです（`demo.html`と同じ内容です）。

### 各サンプルを個別に学ぶ
各フォルダのREADME.mdに詳細な使い方が記載されています。

### HTMLサンプルの実行
```bash
# ブラウザでHTMLファイルを開く
open html/01_basic_structure.html
```

### JavaScriptサンプルの実行
```bash
# Node.jsで実行
node javascript/01_variables.js
```

### TypeScriptサンプルの実行
```bash
# TypeScriptをコンパイルして実行
tsc typescript/02_functions.ts
node typescript/02_functions.js

# または、ts-nodeで直接実行
ts-node typescript/02_functions.ts
```

## 📖 学習の順序

1. **HTML**: Webページの構造を理解する
2. **CSS**: Webページのスタイリングを学ぶ
3. **JavaScript**: Webページに動的な機能を追加する
4. **TypeScript**: 型安全なJavaScriptコードの書き方を学ぶ

## 💡 ヒント

- 各サンプルファイルのコメントをよく読んでください
- コードを実際に実行して動作を確認してください
- コードを変更して実験してみてください
- わからないことがあれば、各フォルダのREADME.mdを参照してください