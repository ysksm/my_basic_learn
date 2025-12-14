// 条件分岐の使い方

// if文: 条件が真の場合に処理を実行
const age = 20;

if (age >= 18) {
    console.log("成人です"); // 条件が真なので実行される
}

// if-else文: 条件が真と偽の場合で処理を分ける
const temperature = 25;

if (temperature > 30) {
    console.log("暑いです");
} else {
    console.log("涼しいです"); // 条件が偽なので実行される
}

// if-else if-else文: 複数の条件を判定
const score = 75;

if (score >= 80) {
    console.log("優秀です");
} else if (score >= 60) {
    console.log("合格です"); // この条件が真なので実行される
} else {
    console.log("不合格です");
}

// 比較演算子
// === : 厳密等価（値と型が同じ）
// !== : 厳密不等価
// > : より大きい
// < : より小さい
// >= : 以上
// <= : 以下

// 論理演算子
// && : かつ（AND）
// || : または（OR）
// ! : でない（NOT）

const isStudent = true;
const hasTicket = false;

if (isStudent && hasTicket) {
    console.log("入場できます");
} else if (isStudent || hasTicket) {
    console.log("割引で入場できます"); // この条件が真なので実行される
} else {
    console.log("通常料金です");
}
